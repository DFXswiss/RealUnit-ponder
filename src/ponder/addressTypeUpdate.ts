import { ponder } from "ponder:registry";
import { addressTypeUpdate, account, accountHistory } from "ponder:schema";

ponder.on("RealUnitShare:AddressTypeUpdate", async ({ event, context }) => {
  const { account: accountAddress, addressType } = event.args;
  const addressTypeUpdateId = `${event.block.number}-${event.log.logIndex}`;

  await context.db.insert(addressTypeUpdate).values({
    id: addressTypeUpdateId,
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

  // Insert accountHistory entry for the account
  await context.db.insert(accountHistory).values({
    id: `history-${addressTypeUpdateId}`,
    account: accountAddress.toLowerCase(),
    blockNumber: Number(event.block.number),
    timestamp: Number(event.block.timestamp),
    txHash: event.transaction.hash,
    eventType: 'addressTypeUpdate',
    addressTypeUpdateId: addressTypeUpdateId,
  });
});

