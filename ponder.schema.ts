import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  // Transfer events
  Transfer: p.createTable({
    id: p.string(),
    from: p.hex(),
    to: p.hex(),
    value: p.bigint(),
    blockNumber: p.bigint(),
    blockTimestamp: p.bigint(),
    transactionHash: p.hex(),
    logIndex: p.int(),
  }),

  // Approval events - ERC-20 allowances
  Approval: p.createTable({
    id: p.string(),
    owner: p.hex(),
    spender: p.hex(),
    value: p.bigint(),
    blockNumber: p.bigint(),
    blockTimestamp: p.bigint(),
    transactionHash: p.hex(),
    logIndex: p.int(),
  }),

  // AddressTypeUpdate - Allowlist status changes
  AddressTypeUpdate: p.createTable({
    id: p.string(),
    account: p.hex(),
    addressType: p.int(), // 0 = normal, 1 = allowlisted, 2 = forbidden, 3 = powerlisted
    blockNumber: p.bigint(),
    blockTimestamp: p.bigint(),
    transactionHash: p.hex(),
    logIndex: p.int(),
  }),

  // Announcement - Official announcements
  Announcement: p.createTable({
    id: p.string(),
    message: p.string(),
    blockNumber: p.bigint(),
    blockTimestamp: p.bigint(),
    transactionHash: p.hex(),
    logIndex: p.int(),
  }),

  // ChangeTerms - Terms updates
  ChangeTerms: p.createTable({
    id: p.string(),
    terms: p.string(),
    blockNumber: p.bigint(),
    blockTimestamp: p.bigint(),
    transactionHash: p.hex(),
    logIndex: p.int(),
  }),

  // ChangeTotalShares - Share count changes
  ChangeTotalShares: p.createTable({
    id: p.string(),
    total: p.bigint(),
    blockNumber: p.bigint(),
    blockTimestamp: p.bigint(),
    transactionHash: p.hex(),
    logIndex: p.int(),
  }),

  // NameChanged - Token name/symbol changes
  NameChanged: p.createTable({
    id: p.string(),
    name: p.string(),
    symbol: p.string(),
    blockNumber: p.bigint(),
    blockTimestamp: p.bigint(),
    transactionHash: p.hex(),
    logIndex: p.int(),
  }),

  // OwnershipTransferred - Contract ownership changes
  OwnershipTransferred: p.createTable({
    id: p.string(),
    previousOwner: p.hex(),
    newOwner: p.hex(),
    blockNumber: p.bigint(),
    blockTimestamp: p.bigint(),
    transactionHash: p.hex(),
    logIndex: p.int(),
  }),

  // TokensDeclaredInvalid - Invalid token declarations
  TokensDeclaredInvalid: p.createTable({
    id: p.string(),
    holder: p.hex(),
    amount: p.bigint(),
    message: p.string(),
    blockNumber: p.bigint(),
    blockTimestamp: p.bigint(),
    transactionHash: p.hex(),
    logIndex: p.int(),
  }),

  // Account statistics
  Account: p.createTable({
    id: p.hex(), // address
    balance: p.bigint(),
    totalSent: p.bigint(),
    totalReceived: p.bigint(),
    transactionCount: p.int(),
    approvalCount: p.int(),
    currentAddressType: p.int(), // Latest address type status
    lastAddressTypeUpdate: p.bigint(), // Timestamp of last status change
  }),

  // Global statistics
  TransferStatistics: p.createTable({
    id: p.string(),
    totalTransfers: p.bigint(),
    totalVolume: p.bigint(),
    uniqueAddresses: p.int(),
    totalApprovals: p.bigint(),
    totalAnnouncements: p.bigint(),
    totalOwnershipChanges: p.bigint(),
    totalInvalidTokenDeclarations: p.bigint(),
    currentTotalShares: p.bigint(),
    lastUpdateBlock: p.bigint(),
    lastUpdateTimestamp: p.bigint(),
  }),

  // Current contract state
  ContractState: p.createTable({
    id: p.string(), // "current"
    currentOwner: p.hex(),
    currentTerms: p.string(),
    currentTotalShares: p.bigint(),
    currentName: p.string(),
    currentSymbol: p.string(),
    lastUpdateBlock: p.bigint(),
    lastUpdateTimestamp: p.bigint(),
  }),
}));
