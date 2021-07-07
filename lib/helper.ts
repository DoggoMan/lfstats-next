export function millisToMinutesAndSeconds(millis: number): string {
  if (!millis) return '0:00'
  // round down for millis -> seconds. would rounding naturally be better in some way?
  let seconds = Math.floor(millis / 1000)

  let minutes = Math.floor(seconds / 60)
  // Now that we've used seconds to calculate minutes, modulo it.
  seconds = seconds % 60
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
}
