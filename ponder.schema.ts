import { onchainTable } from "ponder";

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
