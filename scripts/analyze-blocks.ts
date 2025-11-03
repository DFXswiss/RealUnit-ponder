import { historicalTransferBlocks } from "../blocks";

interface BlockRange {
  startBlock: number;
  endBlock: number;
  specificBlocks: number[];
  totalBlocks: number;
  efficiencyRatio: number; // specificBlocks / totalBlocks
}

/**
 * Analyze block distribution and create optimized groupings
 * Goal: Minimize total blocks scanned while keeping reasonable number of ranges
 */
function analyzeBlockDistribution(maxGapSize: number = 10000): BlockRange[] {
  const ranges: BlockRange[] = [];
  const blocks = [...historicalTransferBlocks].sort((a, b) => a - b);

  let currentRange: BlockRange = {
    startBlock: blocks[0],
    endBlock: blocks[0],
    specificBlocks: [blocks[0]],
    totalBlocks: 1,
    efficiencyRatio: 1,
  };

  for (let i = 1; i < blocks.length; i++) {
    const currentBlock = blocks[i];
    const gap = currentBlock - currentRange.endBlock;

    // If gap is small enough, extend current range
    if (gap <= maxGapSize) {
      currentRange.endBlock = currentBlock;
      currentRange.specificBlocks.push(currentBlock);
      currentRange.totalBlocks = currentRange.endBlock - currentRange.startBlock + 1;
      currentRange.efficiencyRatio =
        currentRange.specificBlocks.length / currentRange.totalBlocks;
    } else {
      // Gap too large, start new range
      ranges.push(currentRange);
      currentRange = {
        startBlock: currentBlock,
        endBlock: currentBlock,
        specificBlocks: [currentBlock],
        totalBlocks: 1,
        efficiencyRatio: 1,
      };
    }
  }

  // Add final range
  ranges.push(currentRange);

  return ranges;
}

/**
 * Calculate statistics for different gap sizes
 */
function compareStrategies() {
  const gapSizes = [5000, 10000, 20000, 50000, 100000];

  console.log("=".repeat(80));
  console.log("BLOCK GROUPING STRATEGY COMPARISON");
  console.log("=".repeat(80));
  console.log();

  gapSizes.forEach((gapSize) => {
    const ranges = analyzeBlockDistribution(gapSize);
    const totalBlocksToScan = ranges.reduce((sum, r) => sum + r.totalBlocks, 0);
    const avgEfficiency =
      ranges.reduce((sum, r) => sum + r.efficiencyRatio, 0) / ranges.length;
    const minEfficiency = Math.min(...ranges.map((r) => r.efficiencyRatio));
    const maxEfficiency = Math.max(...ranges.map((r) => r.efficiencyRatio));

    console.log(`Gap Size: ${gapSize.toLocaleString()} blocks`);
    console.log(`  Ranges Created: ${ranges.length}`);
    console.log(`  Total Blocks to Scan: ${totalBlocksToScan.toLocaleString()}`);
    console.log(
      `  Reduction: ${(((9070406 - totalBlocksToScan) / 9070406) * 100).toFixed(2)}%`
    );
    console.log(`  Avg Efficiency: ${(avgEfficiency * 100).toFixed(2)}%`);
    console.log(`  Min Efficiency: ${(minEfficiency * 100).toFixed(2)}%`);
    console.log(`  Max Efficiency: ${(maxEfficiency * 100).toFixed(2)}%`);
    console.log();
  });
}

/**
 * Generate detailed report for recommended strategy
 */
function generateDetailedReport(maxGapSize: number = 10000) {
  const ranges = analyzeBlockDistribution(maxGapSize);

  console.log("=".repeat(80));
  console.log(`DETAILED REPORT (Gap Size: ${maxGapSize.toLocaleString()})`);
  console.log("=".repeat(80));
  console.log();

  console.log("Summary:");
  console.log(`  Total Ranges: ${ranges.length}`);
  console.log(`  Total Specific Blocks: ${historicalTransferBlocks.length}`);
  console.log(
    `  Total Blocks to Scan: ${ranges.reduce((sum, r) => sum + r.totalBlocks, 0).toLocaleString()}`
  );
  console.log(
    `  Original Blocks to Scan: ${(9070406).toLocaleString()}`
  );
  console.log();

  console.log("Top 10 Least Efficient Ranges:");
  const sortedByEfficiency = [...ranges].sort(
    (a, b) => a.efficiencyRatio - b.efficiencyRatio
  );
  sortedByEfficiency.slice(0, 10).forEach((range, idx) => {
    console.log(
      `  ${idx + 1}. Blocks ${range.startBlock.toLocaleString()} - ${range.endBlock.toLocaleString()}: ` +
        `${range.specificBlocks.length} events / ${range.totalBlocks.toLocaleString()} blocks ` +
        `(${(range.efficiencyRatio * 100).toFixed(2)}%)`
    );
  });
  console.log();

  console.log("Top 10 Most Efficient Ranges:");
  sortedByEfficiency
    .slice(-10)
    .reverse()
    .forEach((range, idx) => {
      console.log(
        `  ${idx + 1}. Blocks ${range.startBlock.toLocaleString()} - ${range.endBlock.toLocaleString()}: ` +
          `${range.specificBlocks.length} events / ${range.totalBlocks.toLocaleString()} blocks ` +
          `(${(range.efficiencyRatio * 100).toFixed(2)}%)`
      );
    });
  console.log();

  return ranges;
}

/**
 * Export ranges for config generation
 */
function exportRanges(ranges: BlockRange[]) {
  console.log("=".repeat(80));
  console.log("EXPORTED RANGES FOR CONFIG GENERATION");
  console.log("=".repeat(80));
  console.log();
  console.log("export const optimizedBlockRanges = [");
  ranges.forEach((range) => {
    console.log(
      `  { start: ${range.startBlock}, end: ${range.endBlock}, count: ${range.specificBlocks.length} }, // Efficiency: ${(range.efficiencyRatio * 100).toFixed(2)}%`
    );
  });
  console.log("];");
  console.log();
}

// Run analysis
console.clear();
compareStrategies();
const recommendedRanges = generateDetailedReport(5000);
exportRanges(recommendedRanges);

// Save to file for config generator
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

writeFileSync(
  join(__dirname, "../optimized-ranges.json"),
  JSON.stringify(
    {
      maxGapSize: 10000,
      ranges: recommendedRanges.map((r) => ({
        startBlock: r.startBlock,
        endBlock: r.endBlock,
        specificBlocks: r.specificBlocks,
        totalBlocks: r.totalBlocks,
        efficiencyRatio: r.efficiencyRatio,
      })),
      statistics: {
        totalRanges: recommendedRanges.length,
        totalSpecificBlocks: historicalTransferBlocks.length,
        totalBlocksToScan: recommendedRanges.reduce(
          (sum, r) => sum + r.totalBlocks,
          0
        ),
        reductionPercentage:
          ((9070406 -
            recommendedRanges.reduce((sum, r) => sum + r.totalBlocks, 0)) /
            9070406) *
          100,
      },
    },
    null,
    2
  )
);

console.log("✓ Analysis saved to: optimized-ranges.json");
