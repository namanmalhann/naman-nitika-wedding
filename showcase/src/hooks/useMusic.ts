import { useCallback, useRef, useState } from "react";

export function useMusic(src: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const ensure = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.7;
    }
    return audioRef.current;
  }, [src]);

  const play = useCallback(() => {
    const a = ensure();
    a.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }, [ensure]);

  const toggle = useCallback(() => {
    const a = ensure();
    if (a.paused) play();
    else {
      a.pause();
      setPlaying(false);
    }
  }, [ensure, play]);

  return { playing, play, toggle };
}
