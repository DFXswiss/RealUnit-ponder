import { ponder } from "ponder:registry";
import { tokensDeclaredInvalid } from "ponder:schema";

ponder.on("RealUnitShare:TokensDeclaredInvalid", async ({ event, context }) => {
  const { holder, amount, message } = event.args;

  await context.db.insert(tokensDeclaredInvalid).values({
    id: `${event.block.number}-${event.log.logIndex}`,
    blockNumber: Number(event.block.number),
    timestamp: Number(event.block.timestamp),
    txHash: event.transaction.hash,
    holder: holder.toLowerCase(),
    amount: amount.toString(),
    message,
  });
});

