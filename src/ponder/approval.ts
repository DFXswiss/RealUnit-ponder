import { ponder } from "ponder:registry";
import { approval } from "ponder:schema";

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
});

