import { ponder } from "@/generated";
import { historicalTransferBlocks } from "../blocks";
import { historicalRangeContractNames } from "../handler-mapping";

const CONTRACT_ADDRESS = "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B" as const;

// =============================================================================
// OPTIMIZATION: Convert array to Set for O(1) lookup instead of O(n)
// =============================================================================
const historicalTransferBlocksSet = new Set(historicalTransferBlocks);

// Helper to check if block should be processed in historical range
// NOTE: With optimized config, this is mostly redundant but kept for safety
function shouldProcessBlock(blockNumber: bigint): boolean {
  return historicalTransferBlocksSet.has(Number(blockNumber));
}

// Helper to get event ID
function getEventId(txHash: string, logIndex: number): string {
  return `${txHash}-${logIndex}`;
}

// =============================================================================
// TRANSFER EVENT HANDLERS
// =============================================================================

async function handleTransfer(event: any, context: any) {
  // Safety check - with optimized ranges, this should always pass
  if (!shouldProcessBlock(event.block.number)) return;

  const { Transfer, Account, TransferStatistics } = context.db;

  // Save transfer event
  await Transfer.create({
    id: getEventId(event.transaction.hash, event.log.logIndex),
    data: {
      from: event.args.from,
      to: event.args.to,
      value: event.args.value,
      blockNumber: event.block.number,
      blockTimestamp: event.block.timestamp,
      transactionHash: event.transaction.hash,
      logIndex: event.log.logIndex,
    },
  });

  // =============================================================================
  // OPTIMIZATION: Calculate balances in-memory instead of RPC calls
  // This eliminates 2 RPC calls per transfer event
  // =============================================================================

  // Update from account (sender)
  await Account.upsert({
    id: event.args.from,
    create: {
      balance: 0n - event.args.value, // Initial balance after send
      totalSent: event.args.value,
      totalReceived: 0n,
      transactionCount: 1,
      approvalCount: 0,
      currentAddressType: 0,
      lastAddressTypeUpdate: 0n,
    },
    update: ({ current }) => ({
      balance: current.balance - event.args.value,
      totalSent: current.totalSent + event.args.value,
      transactionCount: current.transactionCount + 1,
    }),
  });

  // Update to account (receiver)
  await Account.upsert({
    id: event.args.to,
    create: {
      balance: event.args.value, // Initial balance after receive
      totalSent: 0n,
      totalReceived: event.args.value,
      transactionCount: 1,
      approvalCount: 0,
      currentAddressType: 0,
      lastAddressTypeUpdate: 0n,
    },
    update: ({ current }) => ({
      balance: current.balance + event.args.value,
      totalReceived: current.totalReceived + event.args.value,
      transactionCount: current.transactionCount + 1,
    }),
  });

  // Update global statistics
  await TransferStatistics.upsert({
    id: "global",
    create: {
      totalTransfers: 1n,
      totalVolume: event.args.value,
      uniqueAddresses: 0,
      totalApprovals: 0n,
      totalAnnouncements: 0n,
      totalOwnershipChanges: 0n,
      totalInvalidTokenDeclarations: 0n,
      currentTotalShares: 0n,
      lastUpdateBlock: event.block.number,
      lastUpdateTimestamp: event.block.timestamp,
    },
    update: ({ current }) => ({
      totalTransfers: current.totalTransfers + 1n,
      totalVolume: current.totalVolume + event.args.value,
      lastUpdateBlock: event.block.number,
      lastUpdateTimestamp: event.block.timestamp,
    }),
  });
}

// Register handlers for all historical ranges
for (const contractName of historicalRangeContractNames) {
  ponder.on(`${contractName}:Transfer`, async ({ event, context }) => {
    await handleTransfer(event, context);
  });
}

// Register handler for current range
ponder.on("RealUnit_Current:Transfer", async ({ event, context }) => {
  await handleTransfer(event, context);
});

// =============================================================================
// APPROVAL EVENT HANDLERS
// =============================================================================

async function handleApproval(event: any, context: any) {
  if (!shouldProcessBlock(event.block.number)) return;

  const { Approval, Account, TransferStatistics } = context.db;

  // Save approval event
  await Approval.create({
    id: getEventId(event.transaction.hash, event.log.logIndex),
    data: {
      owner: event.args.owner,
      spender: event.args.spender,
      value: event.args.value,
      blockNumber: event.block.number,
      blockTimestamp: event.block.timestamp,
      transactionHash: event.transaction.hash,
      logIndex: event.log.logIndex,
    },
  });

  // Update owner account
  await Account.upsert({
    id: event.args.owner,
    create: {
      balance: 0n,
      totalSent: 0n,
      totalReceived: 0n,
      transactionCount: 0,
      approvalCount: 1,
      currentAddressType: 0,
      lastAddressTypeUpdate: 0n,
    },
    update: ({ current }) => ({
      approvalCount: current.approvalCount + 1,
    }),
  });

  // Update global statistics
  await TransferStatistics.upsert({
    id: "global",
    create: {
      totalTransfers: 0n,
      totalVolume: 0n,
      uniqueAddresses: 0,
      totalApprovals: 1n,
      totalAnnouncements: 0n,
      totalOwnershipChanges: 0n,
      totalInvalidTokenDeclarations: 0n,
      currentTotalShares: 0n,
      lastUpdateBlock: event.block.number,
      lastUpdateTimestamp: event.block.timestamp,
    },
    update: ({ current }) => ({
      totalApprovals: current.totalApprovals + 1n,
      lastUpdateBlock: event.block.number,
      lastUpdateTimestamp: event.block.timestamp,
    }),
  });
}

// Register handlers for all historical ranges
for (const contractName of historicalRangeContractNames) {
  ponder.on(`${contractName}:Approval`, async ({ event, context }) => {
    await handleApproval(event, context);
  });
}

ponder.on("RealUnit_Current:Approval", async ({ event, context }) => {
  await handleApproval(event, context);
});

// =============================================================================
// ADDRESS TYPE UPDATE EVENT HANDLERS
// =============================================================================

async function handleAddressTypeUpdate(event: any, context: any) {
  if (!shouldProcessBlock(event.block.number)) return;

  const { AddressTypeUpdate, Account } = context.db;

  // Save address type update event
  await AddressTypeUpdate.create({
    id: getEventId(event.transaction.hash, event.log.logIndex),
    data: {
      account: event.args.account,
      addressType: event.args.addressType,
      blockNumber: event.block.number,
      blockTimestamp: event.block.timestamp,
      transactionHash: event.transaction.hash,
      logIndex: event.log.logIndex,
    },
  });

  // Update account with new address type
  await Account.upsert({
    id: event.args.account,
    create: {
      balance: 0n,
      totalSent: 0n,
      totalReceived: 0n,
      transactionCount: 0,
      approvalCount: 0,
      currentAddressType: event.args.addressType,
      lastAddressTypeUpdate: event.block.timestamp,
    },
    update: () => ({
      currentAddressType: event.args.addressType,
      lastAddressTypeUpdate: event.block.timestamp,
    }),
  });
}

for (const contractName of historicalRangeContractNames) {
  ponder.on(`${contractName}:AddressTypeUpdate`, async ({ event, context }) => {
    await handleAddressTypeUpdate(event, context);
  });
}

ponder.on("RealUnit_Current:AddressTypeUpdate", async ({ event, context }) => {
  await handleAddressTypeUpdate(event, context);
});

// =============================================================================
// ANNOUNCEMENT EVENT HANDLERS
// =============================================================================

async function handleAnnouncement(event: any, context: any) {
  if (!shouldProcessBlock(event.block.number)) return;

  const { Announcement, TransferStatistics } = context.db;

  // Save announcement
  await Announcement.create({
    id: getEventId(event.transaction.hash, event.log.logIndex),
    data: {
      message: event.args.message,
      blockNumber: event.block.number,
      blockTimestamp: event.block.timestamp,
      transactionHash: event.transaction.hash,
      logIndex: event.log.logIndex,
    },
  });

  // Update global statistics
  await TransferStatistics.upsert({
    id: "global",
    create: {
      totalTransfers: 0n,
      totalVolume: 0n,
      uniqueAddresses: 0,
      totalApprovals: 0n,
      totalAnnouncements: 1n,
      totalOwnershipChanges: 0n,
      totalInvalidTokenDeclarations: 0n,
      currentTotalShares: 0n,
      lastUpdateBlock: event.block.number,
      lastUpdateTimestamp: event.block.timestamp,
    },
    update: ({ current }) => ({
      totalAnnouncements: current.totalAnnouncements + 1n,
      lastUpdateBlock: event.block.number,
      lastUpdateTimestamp: event.block.timestamp,
    }),
  });
}

for (const contractName of historicalRangeContractNames) {
  ponder.on(`${contractName}:Announcement`, async ({ event, context }) => {
    await handleAnnouncement(event, context);
  });
}

ponder.on("RealUnit_Current:Announcement", async ({ event, context }) => {
  await handleAnnouncement(event, context);
});

// =============================================================================
// CHANGE TERMS EVENT HANDLERS
// =============================================================================

async function handleChangeTerms(event: any, context: any) {
  if (!shouldProcessBlock(event.block.number)) return;

  const { ChangeTerms, ContractState } = context.db;

  // Save change terms event
  await ChangeTerms.create({
    id: getEventId(event.transaction.hash, event.log.logIndex),
    data: {
      terms: event.args.terms,
      blockNumber: event.block.number,
      blockTimestamp: event.block.timestamp,
      transactionHash: event.transaction.hash,
      logIndex: event.log.logIndex,
    },
  });

  // Update contract state
  await ContractState.upsert({
    id: "current",
    create: {
      currentOwner: "0x0000000000000000000000000000000000000000",
      currentTerms: event.args.terms,
      currentTotalShares: 0n,
      currentName: "",
      currentSymbol: "",
      lastUpdateBlock: event.block.number,
      lastUpdateTimestamp: event.block.timestamp,
    },
    update: () => ({
      currentTerms: event.args.terms,
      lastUpdateBlock: event.block.number,
      lastUpdateTimestamp: event.block.timestamp,
    }),
  });
}

for (const contractName of historicalRangeContractNames) {
  ponder.on(`${contractName}:ChangeTerms`, async ({ event, context }) => {
    await handleChangeTerms(event, context);
  });
}

ponder.on("RealUnit_Current:ChangeTerms", async ({ event, context }) => {
  await handleChangeTerms(event, context);
});

// =============================================================================
// CHANGE TOTAL SHARES EVENT HANDLERS
// =============================================================================

async function handleChangeTotalShares(event: any, context: any) {
  if (!shouldProcessBlock(event.block.number)) return;

  const { ChangeTotalShares, ContractState, TransferStatistics } = context.db;

  // Save change total shares event
  await ChangeTotalShares.create({
    id: getEventId(event.transaction.hash, event.log.logIndex),
    data: {
      total: event.args.total,
      blockNumber: event.block.number,
      blockTimestamp: event.block.timestamp,
      transactionHash: event.transaction.hash,
      logIndex: event.log.logIndex,
    },
  });

  // Update contract state
  await ContractState.upsert({
    id: "current",
    create: {
      currentOwner: "0x0000000000000000000000000000000000000000",
      currentTerms: "",
      currentTotalShares: event.args.total,
      currentName: "",
      currentSymbol: "",
      lastUpdateBlock: event.block.number,
      lastUpdateTimestamp: event.block.timestamp,
    },
    update: () => ({
      currentTotalShares: event.args.total,
      lastUpdateBlock: event.block.number,
      lastUpdateTimestamp: event.block.timestamp,
    }),
  });

  // Update global statistics
  await TransferStatistics.upsert({
    id: "global",
    create: {
      totalTransfers: 0n,
      totalVolume: 0n,
      uniqueAddresses: 0,
      totalApprovals: 0n,
      totalAnnouncements: 0n,
      totalOwnershipChanges: 0n,
      totalInvalidTokenDeclarations: 0n,
      currentTotalShares: event.args.total,
      lastUpdateBlock: event.block.number,
      lastUpdateTimestamp: event.block.timestamp,
    },
    update: () => ({
      currentTotalShares: event.args.total,
      lastUpdateBlock: event.block.number,
      lastUpdateTimestamp: event.block.timestamp,
    }),
  });
}

for (const contractName of historicalRangeContractNames) {
  ponder.on(`${contractName}:ChangeTotalShares`, async ({ event, context }) => {
    await handleChangeTotalShares(event, context);
  });
}

ponder.on("RealUnit_Current:ChangeTotalShares", async ({ event, context }) => {
  await handleChangeTotalShares(event, context);
});

// =============================================================================
// NAME CHANGED EVENT HANDLERS
// =============================================================================

async function handleNameChanged(event: any, context: any) {
  if (!shouldProcessBlock(event.block.number)) return;

  const { NameChanged, ContractState } = context.db;

  // Save name changed event
  await NameChanged.create({
    id: getEventId(event.transaction.hash, event.log.logIndex),
    data: {
      name: event.args.name,
      symbol: event.args.symbol,
      blockNumber: event.block.number,
      blockTimestamp: event.block.timestamp,
      transactionHash: event.transaction.hash,
      logIndex: event.log.logIndex,
    },
  });

  // Update contract state
  await ContractState.upsert({
    id: "current",
    create: {
      currentOwner: "0x0000000000000000000000000000000000000000",
      currentTerms: "",
      currentTotalShares: 0n,
      currentName: event.args.name,
      currentSymbol: event.args.symbol,
      lastUpdateBlock: event.block.number,
      lastUpdateTimestamp: event.block.timestamp,
    },
    update: () => ({
      currentName: event.args.name,
      currentSymbol: event.args.symbol,
      lastUpdateBlock: event.block.number,
      lastUpdateTimestamp: event.block.timestamp,
    }),
  });
}

for (const contractName of historicalRangeContractNames) {
  ponder.on(`${contractName}:NameChanged`, async ({ event, context }) => {
    await handleNameChanged(event, context);
  });
}

ponder.on("RealUnit_Current:NameChanged", async ({ event, context }) => {
  await handleNameChanged(event, context);
});

// =============================================================================
// OWNERSHIP TRANSFERRED EVENT HANDLERS
// =============================================================================

async function handleOwnershipTransferred(event: any, context: any) {
  if (!shouldProcessBlock(event.block.number)) return;

  const { OwnershipTransferred, ContractState, TransferStatistics } = context.db;

  // Save ownership transferred event
  await OwnershipTransferred.create({
    id: getEventId(event.transaction.hash, event.log.logIndex),
    data: {
      previousOwner: event.args.previousOwner,
      newOwner: event.args.newOwner,
      blockNumber: event.block.number,
      blockTimestamp: event.block.timestamp,
      transactionHash: event.transaction.hash,
      logIndex: event.log.logIndex,
    },
  });

  // Update contract state
  await ContractState.upsert({
    id: "current",
    create: {
      currentOwner: event.args.newOwner,
      currentTerms: "",
      currentTotalShares: 0n,
      currentName: "",
      currentSymbol: "",
      lastUpdateBlock: event.block.number,
      lastUpdateTimestamp: event.block.timestamp,
    },
    update: () => ({
      currentOwner: event.args.newOwner,
      lastUpdateBlock: event.block.number,
      lastUpdateTimestamp: event.block.timestamp,
    }),
  });

  // Update global statistics
  await TransferStatistics.upsert({
    id: "global",
    create: {
      totalTransfers: 0n,
      totalVolume: 0n,
      uniqueAddresses: 0,
      totalApprovals: 0n,
      totalAnnouncements: 0n,
      totalOwnershipChanges: 1n,
      totalInvalidTokenDeclarations: 0n,
      currentTotalShares: 0n,
      lastUpdateBlock: event.block.number,
      lastUpdateTimestamp: event.block.timestamp,
    },
    update: ({ current }) => ({
      totalOwnershipChanges: current.totalOwnershipChanges + 1n,
      lastUpdateBlock: event.block.number,
      lastUpdateTimestamp: event.block.timestamp,
    }),
  });
}

for (const contractName of historicalRangeContractNames) {
  ponder.on(
    `${contractName}:OwnershipTransferred`,
    async ({ event, context }) => {
      await handleOwnershipTransferred(event, context);
    }
  );
}

ponder.on("RealUnit_Current:OwnershipTransferred", async ({ event, context }) => {
  await handleOwnershipTransferred(event, context);
});

// =============================================================================
// TOKENS DECLARED INVALID EVENT HANDLERS
// =============================================================================

async function handleTokensDeclaredInvalid(event: any, context: any) {
  if (!shouldProcessBlock(event.block.number)) return;

  const { TokensDeclaredInvalid, TransferStatistics } = context.db;

  // Save tokens declared invalid event
  await TokensDeclaredInvalid.create({
    id: getEventId(event.transaction.hash, event.log.logIndex),
    data: {
      holder: event.args.holder,
      amount: event.args.amount,
      message: event.args.message,
      blockNumber: event.block.number,
      blockTimestamp: event.block.timestamp,
      transactionHash: event.transaction.hash,
      logIndex: event.log.logIndex,
    },
  });

  // Update global statistics
  await TransferStatistics.upsert({
    id: "global",
    create: {
      totalTransfers: 0n,
      totalVolume: 0n,
      uniqueAddresses: 0,
      totalApprovals: 0n,
      totalAnnouncements: 0n,
      totalOwnershipChanges: 0n,
      totalInvalidTokenDeclarations: 1n,
      currentTotalShares: 0n,
      lastUpdateBlock: event.block.number,
      lastUpdateTimestamp: event.block.timestamp,
    },
    update: ({ current }) => ({
      totalInvalidTokenDeclarations: current.totalInvalidTokenDeclarations + 1n,
      lastUpdateBlock: event.block.number,
      lastUpdateTimestamp: event.block.timestamp,
    }),
  });
}

for (const contractName of historicalRangeContractNames) {
  ponder.on(
    `${contractName}:TokensDeclaredInvalid`,
    async ({ event, context }) => {
      await handleTokensDeclaredInvalid(event, context);
    }
  );
}

ponder.on(
  "RealUnit_Current:TokensDeclaredInvalid",
  async ({ event, context }) => {
    await handleTokensDeclaredInvalid(event, context);
  }
);

console.log(`✓ Registered ${historicalRangeContractNames.length * 9 + 9} event handlers`);
console.log(`  - ${historicalRangeContractNames.length} historical ranges × 9 events`);
console.log(`  - 1 current range × 9 events`);
