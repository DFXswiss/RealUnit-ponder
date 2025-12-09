import { ponder } from "ponder:registry";
import { nameChanged } from "ponder:schema";

ponder.on("RealUnitShare:NameChanged", async ({ event, context }) => {
  const { name, symbol } = event.args;

  await context.db.insert(nameChanged).values({
    id: `${event.block.number}-${event.log.logIndex}`,
    blockNumber: Number(event.block.number),
    timestamp: Number(event.block.timestamp),
    txHash: event.transaction.hash,
    name,
    symbol,
  });
});
