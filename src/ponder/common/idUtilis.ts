export const getDailyTimestampedId = (timestamp: number, sufix: string) => {
  const date = new Date(timestamp * 1000);
  date.setUTCHours(0, 0, 0, 0);
  const strippedTimestamp = Math.floor(date.getTime() / 1000);
  return `${strippedTimestamp}-${sufix}`;
};