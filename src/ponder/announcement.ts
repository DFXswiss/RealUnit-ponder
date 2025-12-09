import { ponder } from "ponder:registry";
import { announcement } from "ponder:schema";

ponder.on("RealUnitShare:Announcement", async ({ event, context }) => {
  const { message } = event.args;

  await context.db.insert(announcement).values({
    id: `${event.block.number}-${event.log.logIndex}`,
    blockNumber: Number(event.block.number),
    timestamp: Number(event.block.timestamp),
    txHash: event.transaction.hash,
    message,
  });
});

