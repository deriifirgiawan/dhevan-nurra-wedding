"use client";

import { useRef, useState, useEffect } from "react";

export default function MusicController() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [started, setStarted] = useState(false);

  const startMusic = () => {
    if (!started) {
      audioRef.current?.play().catch(() => {});
      setStarted(true);
    }
  };

  useEffect(() => {
    const handleInteraction = () => {
      startMusic();
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("mousemove", handleInteraction);
    };

    window.addEventListener("scroll", handleInteraction);
    window.addEventListener("mousemove", handleInteraction);

    return () => {
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("mousemove", handleInteraction);
    };
  }, []);

  return <audio ref={audioRef} src="/audio/berhasil.mp3" loop />;
}
