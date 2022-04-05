import { useState, useEffect } from "react";

export function millisToMinutesAndSeconds(millis: number): string {
  if (!millis) return "0:00";
  // round down for millis -> seconds. would rounding naturally be better in some way?
  let seconds = Math.floor(millis / 1000);

  let minutes = Math.floor(seconds / 60);
  // Now that we've used seconds to calculate minutes, modulo it.
  seconds = seconds % 60;
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

export function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
}

export function decodeMVP([key, value]: [string, number | string]) {
  let mvpName = key;
  let mvpValue = value;
  switch (key) {
    case "position":
      mvpName = "Position";
      switch (value) {
        case "commander":
          mvpValue = "Commander";
          break;
        case "heavy":
          mvpValue = "Heavy Weapons";
          break;
        case "scout":
          mvpValue = "Scout";
          break;
        case "ammo":
          mvpValue = "Ammo Carrier";
          break;
        case "medic":
          mvpValue = "Medic";
          break;
      }
      break;
    case "accuracy":
      mvpName = "Accuracy";
      mvpValue = (<number>value).toFixed(2);
      break;
  }
  return { mvpName: mvpName, mvpValue: mvpValue };
}
