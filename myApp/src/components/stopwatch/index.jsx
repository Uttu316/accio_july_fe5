import { useEffect, useState } from "react";
import "./stopwatch.css";
let intervalId;
const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const onStart = () => {
    setTime((currTime) => currTime + 1);
    intervalId = setInterval(() => {
      console.log("Timer runing");
      setTime((currTime) => currTime + 1);
    }, 1000);
  };
  const onPause = () => {
    clearInterval(intervalId); //stop the interval
    setIsPaused(true); //async
  };
  const onReset = () => {
    clearInterval(intervalId); //stop the interval
    setTime(0);
  };
  const onRestart = () => {
    setIsPaused(false);
    setTime((currTime) => currTime + 1);
    intervalId = setInterval(() => {
      setTime((currTime) => currTime + 1);
    }, 1000);
  };

  useEffect(() => {
    //mounting
    console.log("Mounted");

    return () => {
      //cleanup function
      console.log("unmounting");
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (isPaused) {
      alert("Timer Paused");
    }
  }, [isPaused]);

  const isTimerStaterd = time !== 0;

  return (
    <div className="stop-watch">
      <div className="stop-watch-time">{time}</div>
      <div className="stop-watch-actions">
        {!isTimerStaterd && (
          <button className="stop-watch-button start-btn" onClick={onStart}>
            Start
          </button>
        )}
        {isTimerStaterd && (
          <>
            {!isPaused && (
              <button className="stop-watch-button pause-btn" onClick={onPause}>
                Pause
              </button>
            )}
            {isPaused && (
              <button
                className="stop-watch-button restart-btn"
                onClick={onRestart}
              >
                Restart
              </button>
            )}
            <button className="stop-watch-button reset-btn" onClick={onReset}>
              Reset
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default StopWatch;
