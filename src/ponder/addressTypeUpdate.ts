import { ponder } from "ponder:registry";
import { addressTypeUpdate, account } from "ponder:schema";

ponder.on("RealUnitShare:AddressTypeUpdate", async ({ event, context }) => {
  const { account: accountAddress, addressType } = event.args;

  await context.db.insert(addressTypeUpdate).values({
    id: `${event.block.number}-${event.log.logIndex}`,
    blockNumber: Number(event.block.number),
    timestamp: Number(event.block.timestamp),
    txHash: event.transaction.hash,
    account: accountAddress.toLowerCase(),
    addressType: Number(addressType),
  });

  await context.db.insert(account).values({
    id: accountAddress.toLowerCase(),
    address: accountAddress.toLowerCase(),
    addressType: Number(addressType),
    totalSent: 0n,
    totalReceived: 0n,
    totalTransactions: 0,
    balance: 0n,
    lastUpdated: Number(event.block.timestamp),
  }).onConflictDoUpdate({
    addressType: Number(addressType),
    lastUpdated: Number(event.block.timestamp),
  });
});

