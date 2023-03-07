import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const [playPause, setPlayPause] = useState(true);
  const [count, setCount] = useState(0);
  const timer = useRef(null);

  const createTimer = () => {
    timer.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };
  useEffect(() => {
    createTimer();
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  const handleReset = () => {
    setCount(0);
    setPlayPause(false);
    clearInterval(timer.current);
  };
  const handlePlayPause = () => {
    if (playPause) {
      clearInterval(timer.current);
    } else {
      createTimer();
    }
    setPlayPause((s) => !s);
  };
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleReset}>reset</button>
      <button onClick={handlePlayPause}>{playPause ? "Pause" : "Play"}</button>
    </div>
  );
}
