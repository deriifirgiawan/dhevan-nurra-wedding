"use client";

import { useEffect, useState } from "react";

export const CountDate = () => {
  const eventDate = new Date("2025-09-27T00:00:00");

  const calculateTimeLeft = () => {
    const difference = eventDate.getTime() - new Date().getTime();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<{
    days: number | null;
    hours: number | null;
    minutes: number | null;
    seconds: number | null;
  }>({ days: null, hours: null, minutes: null, seconds: null });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="mt-6">
      <div className="grid grid-cols-4 gap-4 text-center">
        <div className="bg-white/20 rounded-lg p-3">
          <p className="text-3xl font-bold font-nunito">{timeLeft.days}</p>
          <p className="text-sm font-nunito">Hari</p>
        </div>
        <div className="bg-white/20 rounded-lg p-3">
          <p className="text-3xl font-bold font-nunito">{timeLeft.hours}</p>
          <p className="text-sm font-nunito">Jam</p>
        </div>
        <div className="bg-white/20 rounded-lg p-3">
          <p className="text-3xl font-bold font-nunito">{timeLeft.minutes}</p>
          <p className="text-sm font-nunito">Menit</p>
        </div>
        <div className="bg-white/20 rounded-lg p-3">
          <p className="text-3xl font-bold font-nunito">{timeLeft.seconds}</p>
          <p className="text-sm font-nunito">Detik</p>
        </div>
      </div>
    </div>
  );
};
