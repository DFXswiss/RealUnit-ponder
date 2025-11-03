import { ponder } from "ponder:registry";
import { ownershipTransferred } from "ponder:schema";

ponder.on("RealUnitShare:OwnershipTransferred", async ({ event, context }) => {
  const { previousOwner, newOwner } = event.args;

  await context.db.insert(ownershipTransferred).values({
    id: `${event.block.number}-${event.log.logIndex}`,
    blockNumber: Number(event.block.number),
    timestamp: Number(event.block.timestamp),
    txHash: event.transaction.hash,
    previousOwner: previousOwner.toLowerCase(),
    newOwner: newOwner.toLowerCase(),
  });
});

