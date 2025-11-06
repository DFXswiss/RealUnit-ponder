import { ponder } from "ponder:registry";
import { tokensDeclaredInvalid, totalSupply, accountHistory } from "ponder:schema";

ponder.on("RealUnitShare:TokensDeclaredInvalid", async ({ event, context }) => {
  const { holder, amount, message } = event.args;
  const tokensDeclaredInvalidId = `${event.block.number}-${event.log.logIndex}`;

  await context.db.insert(tokensDeclaredInvalid).values({
    id: tokensDeclaredInvalidId,
    blockNumber: Number(event.block.number),
    timestamp: Number(event.block.timestamp),
    txHash: event.transaction.hash,
    holder: holder.toLowerCase(),
    amount: amount.toString(),
    message,
  });

  // Insert accountHistory entry for the holder
  await context.db.insert(accountHistory).values({
    id: `history-${tokensDeclaredInvalidId}`,
    account: holder.toLowerCase(),
    blockNumber: Number(event.block.number),
    timestamp: Number(event.block.timestamp),
    txHash: event.transaction.hash,
    eventType: 'tokensDeclaredInvalid',
    tokensDeclaredInvalidId: tokensDeclaredInvalidId,
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

