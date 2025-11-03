import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load optimized ranges
const rangesData = JSON.parse(
  readFileSync(join(__dirname, "../optimized-ranges.json"), "utf-8")
);

console.log("=".repeat(80));
console.log("GENERATING OPTIMIZED PONDER CONFIG");
console.log("=".repeat(80));
console.log();
console.log(`Total Ranges: ${rangesData.ranges.length}`);
console.log(
  `Total Blocks to Scan: ${rangesData.statistics.totalBlocksToScan.toLocaleString()}`
);
console.log(
  `Reduction: ${rangesData.statistics.reductionPercentage.toFixed(2)}%`
);
console.log();

// Generate config file content
const configContent = `import { createConfig } from "@ponder/core";
import { http } from "viem";

import { RealUnitAbi } from "./abis/RealUnitAbi";
import { HISTORICAL_END_BLOCK } from "./blocks";

// =============================================================================
// OPTIMIZED CONFIGURATION - AUTO-GENERATED
// =============================================================================
// This configuration was auto-generated to optimize RPC usage
//
// Statistics:
// - Total Ranges: ${rangesData.ranges.length}
// - Total Blocks to Scan: ${rangesData.statistics.totalBlocksToScan.toLocaleString()}
// - Original Blocks: 9,070,406
// - Reduction: ${rangesData.statistics.reductionPercentage.toFixed(2)}%
// - RPC Savings: ~${rangesData.statistics.reductionPercentage.toFixed(0)}%
//
// Generated: ${new Date().toISOString()}
// =============================================================================

export default createConfig({
  networks: {
    mainnet: {
      chainId: 1,
      transport: http(process.env.PONDER_RPC_URL_1),
    },
  },
  contracts: {
${rangesData.ranges
  .map(
    (range: any, index: number) => `    // Range ${index + 1}: ${range.specificBlocks.length} events in ${range.totalBlocks.toLocaleString()} blocks (${(range.efficiencyRatio * 100).toFixed(2)}% efficient)
    RealUnit_Historical_${index}: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: ${range.startBlock},
      endBlock: ${range.endBlock},
    },`
  )
  .join("\n")}
    // Current range: all blocks after historical period
    RealUnit_Current: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: HISTORICAL_END_BLOCK + 1,
    },
  },
});
`;

// Write new config
writeFileSync(
  join(__dirname, "../ponder.config.optimized.ts"),
  configContent
);

console.log("✓ Generated: ponder.config.optimized.ts");
console.log();
console.log("Next steps:");
console.log("  1. Review the generated config");
console.log("  2. Backup your current ponder.config.ts");
console.log("  3. Replace ponder.config.ts with ponder.config.optimized.ts");
console.log("  4. Update event handlers to use new contract names");
console.log();

// Generate event handler mapping
const handlerMappingContent = `/**
 * Event Handler Mapping for Optimized Config
 * Auto-generated - ${new Date().toISOString()}
 */

export const historicalRangeContractNames = [
${rangesData.ranges
  .map((_: any, index: number) => `  "RealUnit_Historical_${index}",`)
  .join("\n")}
];

export const allEventTypes = [
  "Transfer",
  "Approval",
  "AddressTypeUpdate",
  "Announcement",
  "ChangeTerms",
  "ChangeTotalShares",
  "NameChanged",
  "OwnershipTransferred",
  "TokensDeclaredInvalid",
];

/**
 * Generate all event handler names
 * Example: "RealUnit_Historical_0:Transfer"
 */
export function getAllHistoricalEventHandlers(): string[] {
  const handlers: string[] = [];
  for (const contractName of historicalRangeContractNames) {
    for (const eventType of allEventTypes) {
      handlers.push(\`\${contractName}:\${eventType}\`);
    }
  }
  return handlers;
}

/**
 * Total number of event handlers
 */
export const totalHistoricalHandlers =
  historicalRangeContractNames.length * allEventTypes.length;

console.log(\`Total historical event handlers: \${totalHistoricalHandlers}\`);
`;

writeFileSync(
  join(__dirname, "../handler-mapping.ts"),
  handlerMappingContent
);

console.log("✓ Generated: handler-mapping.ts");
console.log();
