import { ponder } from "ponder:registry";
import { transfer, account, historicalBalance, totalSupply, accountHistory } from "ponder:schema";
import { getBalances } from "./common/getBalances";
import { getDailyTimestampedId } from "./common/idUtilis";

ponder.on("RealUnitShare:Transfer", async ({ event, context }) => {
  const { from, to, value } = event.args;
  const transferId = `${event.block.number}-${event.log.logIndex}`;

  await context.db.insert(transfer).values({
    id: transferId,
    blockNumber: Number(event.block.number),
    timestamp: Number(event.block.timestamp),
    txHash: event.transaction.hash,
    from: from.toLowerCase(),
    to: to.toLowerCase(),
    value: value.toString(),
  });

  const [fromBalance, toBalance] = await getBalances([from, to], context.contracts.RealUnitShare, context.client);

  await context.db.insert(account).values({
    id: from.toLowerCase(),
    address: from.toLowerCase(),
    addressType: 0,
    totalSent: value,
    totalReceived: value,
    totalTransactions: 1,
    balance: fromBalance,
    lastUpdated: Number(event.block.timestamp),
  }).onConflictDoUpdate((row)=>({
    totalTransactions: row.totalTransactions + 1,
    totalSent: row.totalSent + value,
    balance: fromBalance,
    lastUpdated: Number(event.block.timestamp),
  }));

  await context.db.insert(account).values({
    id: to.toLowerCase(),
    address: to.toLowerCase(),
    addressType: 0,
    totalSent: value,
    totalReceived: value,
    totalTransactions: 1,
    balance: toBalance,
    lastUpdated: Number(event.block.timestamp),
  }).onConflictDoUpdate((row)=>({
    totalTransactions: row.totalTransactions + 1,
    totalReceived: row.totalReceived + value,
    balance: toBalance,
    lastUpdated: Number(event.block.timestamp),
  }));

  await context.db.insert(historicalBalance).values({
    id: getDailyTimestampedId(Number(event.block.timestamp), from.toLowerCase()),
    address: from.toLowerCase(),
    balance: fromBalance,
    timestamp: Number(event.block.timestamp),
  }).onConflictDoUpdate((row)=>({
    balance: fromBalance,
    timestamp: Number(event.block.timestamp),
  }));

  await context.db.insert(historicalBalance).values({
    id: getDailyTimestampedId(Number(event.block.timestamp), to.toLowerCase()),
    address: to.toLowerCase(),
    balance: toBalance,
    timestamp: Number(event.block.timestamp),
  }).onConflictDoUpdate((row)=>({
    balance: toBalance,
    timestamp: Number(event.block.timestamp),
  }));

  // Insert accountHistory entries for both from and to accounts
  await context.db.insert(accountHistory).values({
    id: `history-${transferId}-from`,
    account: from.toLowerCase(),
    blockNumber: Number(event.block.number),
    timestamp: Number(event.block.timestamp),
    txHash: event.transaction.hash,
    eventType: 'transfer',
    transferId: transferId,
  });

  await context.db.insert(accountHistory).values({
    id: `history-${transferId}-to`,
    account: to.toLowerCase(),
    blockNumber: Number(event.block.number),
    timestamp: Number(event.block.timestamp),
    txHash: event.transaction.hash,
    eventType: 'transfer',
    transferId: transferId,
  });

  const totalSupplyValue = await context.client.readContract({
    address: context.contracts.RealUnitShare.address,
    abi: context.contracts.RealUnitShare.abi,
    functionName: "totalSupply",
    args: [],
  });

  await context.db.insert(totalSupply).values({
    id: `${event.block.number}-${event.log.logIndex}`,
    value: BigInt(totalSupplyValue),
    timestamp: Number(event.block.timestamp),
  }).onConflictDoUpdate((row)=>({
    value: BigInt(totalSupplyValue),
    timestamp: Number(event.block.timestamp),
  }));
});

