"use client";

import { useRef, useState } from "react";

export default function MusicController() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [started, setStarted] = useState(false);

  const startMusic = () => {
    audioRef.current?.play();
    setStarted(true);
  };

  if (!started) {
    return (
      <div
        className="fixed inset-0 flex justify-center items-cente z-50 text-white text-center p-4 cursor-pointer"
        onClick={startMusic}
      ></div>
    );
  }

  return (
    <audio ref={audioRef} src="/audio/berhasil.mp3" loop={true} autoPlay />
  );
}
