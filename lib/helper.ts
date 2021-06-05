export function millisToMinutesAndSeconds(millis: number): string {
  let minutes = Math.floor(millis / 60000);
  let seconds = parseInt(((millis % 60000) / 1000).toFixed(0));
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}
