import { ponder } from "ponder:registry";
import { account, approval } from "ponder:schema";

ponder.on("RealUnitShare:Approval", async ({ event, context }) => {
  const { owner, spender, value } = event.args;

  await context.db.insert(approval).values({
    id: `${event.block.number}-${event.log.logIndex}`,
    blockNumber: Number(event.block.number),
    timestamp: Number(event.block.timestamp),
    txHash: event.transaction.hash,
    owner: owner.toLowerCase(),
    spender: spender.toLowerCase(),
    value: value.toString(),
  });

  await context.db.insert(account).values({
    id: owner.toLowerCase(),
    address: owner.toLowerCase(),
    addressType: 0,
    totalSent: 0n,
    totalReceived: 0n,
    totalTransactions: 0,
    balance: 0n,
    lastUpdated: Number(event.block.timestamp),
  }).onConflictDoUpdate((row)=>({
    totalTransactions: row.totalTransactions + 1,
    lastUpdated: Number(event.block.timestamp)
  }));
});
