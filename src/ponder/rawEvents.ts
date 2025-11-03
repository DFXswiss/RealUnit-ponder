import { ponder } from "ponder:registry";
import {
  addressTypeUpdate,
  announcement,
  approval,
  changeTermsOfService,
  changeTotalShare,
  nameChanged,
  ownershipTransferred,
  tokensDeclaredInvalid,
  transfer,
} from "ponder:schema";

ponder.on("RealUnitShare:AddressTypeUpdate", async ({ event, context }) => {
  const { account, addressType } = event.args;

  await context.db.insert(addressTypeUpdate).values({
    id: `${event.block.number}-${event.log.logIndex}`,
    blockNumber: Number(event.block.number),
    timestamp: Number(event.block.timestamp),
    txHash: event.transaction.hash,
    account: account.toLowerCase(),
    addressType: Number(addressType),
  });
});

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

ponder.on("RealUnitShare:Transfer", async ({ event, context }) => {
  const { from, to, value } = event.args;

  await context.db.insert(transfer).values({
    id: `${event.block.number}-${event.log.logIndex}`,
    blockNumber: Number(event.block.number),
    timestamp: Number(event.block.timestamp),
    txHash: event.transaction.hash,
    from: from.toLowerCase(),
    to: to.toLowerCase(),
    value: value.toString(),
  });
});