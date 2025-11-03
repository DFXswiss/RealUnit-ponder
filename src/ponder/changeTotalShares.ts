import { ponder } from "ponder:registry";
import { changeTotalShare } from "ponder:schema";

ponder.on("RealUnitShare:ChangeTotalShares", async ({ event, context }) => {
  const { total } = event.args;

  await context.db.insert(changeTotalShare).values({
    id: `${event.block.number}-${event.log.logIndex}`,
    blockNumber: Number(event.block.number),
    timestamp: Number(event.block.timestamp),
    txHash: event.transaction.hash,
    total: total.toString(),
  });
});

