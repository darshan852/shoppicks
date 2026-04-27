import { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState({ h: 4, m: 12, s: 59 });
  useEffect(() => {
    const t = setInterval(() => setTime(prev => {
      let { h, m, s } = prev;
      if (s > 0) return { h, m, s: s - 1 };
      if (m > 0) return { h, m: m - 1, s: 59 };
      if (h > 0) return { h: h - 1, m: 59, s: 59 };
      return prev;
    }), 1000);
    return () => clearInterval(t);
  }, []);
  const pad = n => String(n).padStart(2, "0");
  return (
    <div className="timer-wrap">
      {[["h", "Hours"], ["m", "Mins"], ["s", "Secs"]].map(([k, l], i) => (
        <>
          <div key={k} className="timer-block">
            <div className="timer-num">{pad(time[k])}</div>
            <div className="timer-label">{l}</div>
          </div>
          {i < 2 && <div className="timer-sep">:</div>}
        </>
      ))}
    </div>
  );
}

export default Timer