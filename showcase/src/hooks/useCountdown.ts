import { useEffect, useState } from "react";

export function useCountdown(iso: string) {
  const target = new Date(iso).getTime();
  const [left, setLeft] = useState(() => Math.max(0, target - Date.now()));

  useEffect(() => {
    const id = window.setInterval(() => {
      setLeft(Math.max(0, target - Date.now()));
    }, 1000);
    return () => clearInterval(id);
  }, [target]);

  const pad = (n: number) => String(n).padStart(2, "0");
  return {
    days: pad(Math.floor(left / 86400000)),
    hours: pad(Math.floor(left / 3600000) % 24),
    mins: pad(Math.floor(left / 60000) % 60),
    secs: pad(Math.floor(left / 1000) % 60),
    done: left === 0,
  };
}
