import { ponder } from "ponder:registry";
import { changeTermsOfService } from "ponder:schema";

ponder.on("RealUnitShare:ChangeTerms", async ({ event, context }) => {
  const { terms } = event.args;

  await context.db.insert(changeTermsOfService).values({
    id: `${event.block.number}-${event.log.logIndex}`,
    blockNumber: Number(event.block.number),
    timestamp: Number(event.block.timestamp),
    txHash: event.transaction.hash,
    terms,
  });
});

