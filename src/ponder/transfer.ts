import { ponder } from "ponder:registry";
import { transfer, account } from "ponder:schema";

ponder.on("RealUnitShare:Transfer", async ({ event, context }) => {
  const { from, to, value } = event.args;

  await context.db.insert(transfer).values({
    id: `${event.block.number}-${event.log.logIndex}`,
    blockNumber: Number(event.block.number),
    timestamp: Number(event.block.timestamp),
    txHash: event.transaction.hash,
    from: from.toLowerCase(),
    to: to.toLowerCase(),
    value: value.toString(),
  });


  await context.db.insert(account).values({
    id: from.toLowerCase(),
    address: from.toLowerCase(),
    addressType: 0,
    totalSent: value,
    totalReceived: value,
    totalTransactions: 1,
    lastUpdated: Number(event.block.timestamp),
  }).onConflictDoUpdate((row)=>({
    totalTransactions: row.totalTransactions + 1,
    totalSent: row.totalSent + value,
    lastUpdated: Number(event.block.timestamp),
  }));

  await context.db.insert(account).values({
    id: to.toLowerCase(),
    address: to.toLowerCase(),
    addressType: 0,
    totalSent: value,
    totalReceived: value,
    totalTransactions: 1,
    lastUpdated: Number(event.block.timestamp),
  }).onConflictDoUpdate((row)=>({
    totalTransactions: row.totalTransactions + 1,
    totalReceived: row.totalReceived + value,
    lastUpdated: Number(event.block.timestamp),
  }));
});

