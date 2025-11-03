import { copyFileSync, existsSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");

console.log("=".repeat(80));
console.log("APPLYING PONDER OPTIMIZATIONS");
console.log("=".repeat(80));
console.log();

// Check if optimized files exist
const optimizedConfig = join(rootDir, "ponder.config.optimized.ts");
const optimizedIndex = join(rootDir, "src/index.optimized.ts");
const handlerMapping = join(rootDir, "handler-mapping.ts");

const missingFiles = [];
if (!existsSync(optimizedConfig)) missingFiles.push("ponder.config.optimized.ts");
if (!existsSync(optimizedIndex)) missingFiles.push("src/index.optimized.ts");
if (!existsSync(handlerMapping)) missingFiles.push("handler-mapping.ts");

if (missingFiles.length > 0) {
  console.error("❌ Error: Missing required files:");
  missingFiles.forEach((file) => console.error(`   - ${file}`));
  console.error();
  console.error("Please run the following scripts first:");
  console.error("  1. npx tsx scripts/analyze-blocks.ts");
  console.error("  2. npx tsx scripts/generate-config.ts");
  process.exit(1);
}

// Load statistics
const rangesData = JSON.parse(
  readFileSync(join(rootDir, "optimized-ranges.json"), "utf-8")
);

console.log("📊 Optimization Statistics:");
console.log(`  Total Ranges: ${rangesData.ranges.length}`);
console.log(
  `  Total Blocks to Scan: ${rangesData.statistics.totalBlocksToScan.toLocaleString()}`
);
console.log(
  `  Original Blocks: ${(9070406).toLocaleString()}`
);
console.log(
  `  Reduction: ${rangesData.statistics.reductionPercentage.toFixed(2)}%`
);
console.log();

// Create backups
console.log("📦 Creating backups...");
const timestamp = new Date().toISOString().replace(/[:.]/g, "-");

try {
  const originalConfig = join(rootDir, "ponder.config.ts");
  const originalIndex = join(rootDir, "src/index.ts");

  if (existsSync(originalConfig)) {
    const backupConfig = join(rootDir, `ponder.config.backup-${timestamp}.ts`);
    copyFileSync(originalConfig, backupConfig);
    console.log(`  ✓ Backed up: ponder.config.ts → ponder.config.backup-${timestamp}.ts`);
  }

  if (existsSync(originalIndex)) {
    const backupIndex = join(rootDir, `src/index.backup-${timestamp}.ts`);
    copyFileSync(originalIndex, backupIndex);
    console.log(`  ✓ Backed up: src/index.ts → src/index.backup-${timestamp}.ts`);
  }
} catch (error) {
  console.error("❌ Error creating backups:", error);
  process.exit(1);
}

console.log();

// Apply optimizations
console.log("🚀 Applying optimizations...");

try {
  // Copy optimized config
  copyFileSync(optimizedConfig, join(rootDir, "ponder.config.ts"));
  console.log("  ✓ Applied: ponder.config.optimized.ts → ponder.config.ts");

  // Copy optimized index
  copyFileSync(optimizedIndex, join(rootDir, "src/index.ts"));
  console.log("  ✓ Applied: src/index.optimized.ts → src/index.ts");

  console.log();
  console.log("=".repeat(80));
  console.log("✅ OPTIMIZATION APPLIED SUCCESSFULLY!");
  console.log("=".repeat(80));
  console.log();
  console.log("Next steps:");
  console.log("  1. Stop the current Ponder dev server (if running)");
  console.log("  2. Delete .ponder/ directory to start fresh:");
  console.log("     rm -rf .ponder");
  console.log("  3. Restart Ponder:");
  console.log("     npm run dev");
  console.log();
  console.log("Expected improvements:");
  console.log(`  - RPC calls reduced by ~${rangesData.statistics.reductionPercentage.toFixed(0)}%`);
  console.log("  - Sync time reduced from hours/days to minutes");
  console.log("  - No more unnecessary balanceOf() contract calls");
  console.log();
  console.log("To rollback:");
  console.log(`  cp ponder.config.backup-${timestamp}.ts ponder.config.ts`);
  console.log(`  cp src/index.backup-${timestamp}.ts src/index.ts`);
  console.log();
} catch (error) {
  console.error("❌ Error applying optimizations:", error);
  console.error();
  console.error("Your original files are backed up. You can restore them with:");
  console.error(`  cp ponder.config.backup-${timestamp}.ts ponder.config.ts`);
  console.error(`  cp src/index.backup-${timestamp}.ts src/index.ts`);
  process.exit(1);
}
