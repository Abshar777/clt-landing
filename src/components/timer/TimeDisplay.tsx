import React, { useEffect,useState } from 'react';
import { Digit } from './digit';

interface TimeDisplayProps {
  totalSeconds: number;
}

export const TimeDisplay: React.FC<TimeDisplayProps> = ({ totalSeconds }) => {
  const h = Math.floor(totalSeconds / 3600);
  const [time, setTime] = useState(totalSeconds);
    const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;

  const format = (num: number) => {
    const str = num.toString().padStart(2, '0');
    return [parseInt(str[0]), parseInt(str[1])];
  };


  useEffect(() => {
  const interval = setInterval(() => {
    setTime(time - 1);
  }, 1000);
  return () => clearInterval(interval);
}, [time]);

  const [h1, h2] = format(Math.floor(time / 3600));
  const [m1, m2] = format(Math.floor((time % 3600) / 60));
  const [s1, s2] = format(time % 60);

  return (
    <div className="flex  items-center gap-2  select-none">
      {/* Hours */}
      <div className="flex gap-1">
        <Digit value={h1} />
        <Digit value={h2} />
      </div>

      <span className="text-2xl font-bold text-slate-500">:</span>

      {/* Minutes */}
      <div className="flex gap-1">
        <Digit value={m1} />
        <Digit value={m2} />
      </div>

      <span className="text-2xl  font-bold text-slate-500">:</span>

      {/* Seconds */}
      <div className="flex gap-1">
        <Digit value={s1} />
        <Digit value={s2} />
      </div>
    </div>
  );
};
