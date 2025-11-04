import { onchainTable, relations } from "ponder";

export const addressTypeUpdate = onchainTable("addressTypeUpdate", (t) => ({
  id: t.text().primaryKey(),
  blockNumber: t.integer().notNull(),
  timestamp: t.integer().notNull(),
  txHash: t.text().notNull(),
  account: t.text().notNull(),
  addressType: t.integer().notNull(),
}));

export const announcement = onchainTable("announcement", (t) => ({
  id: t.text().primaryKey(),
  blockNumber: t.integer().notNull(),
  timestamp: t.integer().notNull(),
  txHash: t.text().notNull(),
  message: t.text().notNull(),
}));

export const approval = onchainTable("approval", (t) => ({
  id: t.text().primaryKey(),
  blockNumber: t.integer().notNull(),
  timestamp: t.integer().notNull(),
  txHash: t.text().notNull(),
  owner: t.text().notNull(),
  spender: t.text().notNull(),
  value: t.text().notNull(),
}));

export const changeTermsOfService = onchainTable("changeTermsOfService", (t) => ({
  id: t.text().primaryKey(),
  blockNumber: t.integer().notNull(),
  timestamp: t.integer().notNull(),
  txHash: t.text().notNull(),
  terms: t.text().notNull(),
}));

export const changeTotalShare = onchainTable("changeTotalShare", (t) => ({
  id: t.text().primaryKey(),
  blockNumber: t.integer().notNull(),
  timestamp: t.integer().notNull(),
  txHash: t.text().notNull(),
  total: t.text().notNull(),
}));

export const nameChanged = onchainTable("nameChanged", (t) => ({
  id: t.text().primaryKey(),
  blockNumber: t.integer().notNull(),
  timestamp: t.integer().notNull(),
  txHash: t.text().notNull(),
  name: t.text().notNull(),
  symbol: t.text().notNull(),
}));

export const ownershipTransferred = onchainTable("ownershipTransferred", (t) => ({
  id: t.text().primaryKey(),
  blockNumber: t.integer().notNull(),
  timestamp: t.integer().notNull(),
  txHash: t.text().notNull(),
  previousOwner: t.text().notNull(),
  newOwner: t.text().notNull(),
}));

export const tokensDeclaredInvalid = onchainTable("tokensDeclaredInvalid", (t) => ({
  id: t.text().primaryKey(),
  blockNumber: t.integer().notNull(),
  timestamp: t.integer().notNull(),
  txHash: t.text().notNull(),
  holder: t.text().notNull(),
  amount: t.text().notNull(),
  message: t.text().notNull(),
}));

export const transfer = onchainTable("transfer", (t) => ({
  id: t.text().primaryKey(),
  blockNumber: t.integer().notNull(),
  timestamp: t.integer().notNull(),
  txHash: t.text().notNull(),
  from: t.text().notNull(),
  to: t.text().notNull(),
  value: t.text().notNull(),
}));


export const account = onchainTable("account", (t) => ({
  id: t.text().primaryKey(),
  address: t.text().notNull(),
  addressType: t.integer().notNull(),
  totalSent: t.bigint().notNull(),
  totalReceived: t.bigint().notNull(),
  totalTransactions: t.integer().notNull(),
  balance: t.bigint().notNull(),
  lastUpdated: t.integer().notNull(),
}));

export const historicalBalance = onchainTable("historicalBalance", (t) => ({
  id: t.text().primaryKey(),
  address: t.text().notNull(),
  balance: t.bigint().notNull(),
  timestamp: t.integer().notNull(),
}));

// Relations
export const transferRelations = relations(transfer, ({ one }) => ({
  fromAccount: one(account, { fields: [transfer.from], references: [account.address] }),
  toAccount: one(account, { fields: [transfer.to], references: [account.address] }),
}));

export const approvalRelations = relations(approval, ({ one }) => ({
  ownerAccount: one(account, { fields: [approval.owner], references: [account.address] }),
}));

export const tokensDeclaredInvalidRelations = relations(tokensDeclaredInvalid, ({ one }) => ({
  holderAccount: one(account, { fields: [tokensDeclaredInvalid.holder], references: [account.address] }),
}));

export const addressTypeUpdateRelations = relations(addressTypeUpdate, ({ one }) => ({
  account: one(account, { fields: [addressTypeUpdate.account], references: [account.address] }),
}));

export const historicalBalanceRelations = relations(historicalBalance, ({ one }) => ({
  account: one(account, { fields: [historicalBalance.address], references: [account.address] }),
}));

export const accountRelations = relations(account, ({ many }) => ({
  transfersSent: many(transfer),
  transfersReceived: many(transfer),
  approvals: many(approval),
  tokensDeclaredInvalid: many(tokensDeclaredInvalid),
  addressTypeUpdates: many(addressTypeUpdate),
  historicalBalances: many(historicalBalance),
}));