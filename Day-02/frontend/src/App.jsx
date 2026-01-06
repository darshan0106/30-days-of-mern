import { useState, useRef, useEffect } from "react";

function App() {
  const [laps, setLaps] = useState([]);
  const [time, setTime] = useState(0); // milliseconds
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);

  const handleLap = () => {
    setLaps((prev) => [...prev, time]);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}:${String(milliseconds).padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 h-screen bg-gray-100">
      <div className="h-64 w-64 bg-gray-300 rounded-2xl p-3 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Stop Watch</h1>
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="text-xl m-3 bg-white p-2 rounded-xl mb-4">
            {formatTime(time)}
          </h2>
          <div className="flex flex-row w-full justify-around mb-3">
            <button
              className="bg-gray-400 p-2 px-3 rounded-xl cursor-pointer"
              onClick={() => handleStart()}
            >
              Start
            </button>
            <button
              className="bg-gray-400 p-2 px-3 rounded-xl cursor-pointer"
              onClick={() => handleStop()}
            >
              Stop
            </button>
          </div>
          <button className="cursor-pointer mb-1" onClick={() => handleLap()}>
            Lap
          </button>
          <button className="cursor-pointer" onClick={() => handleReset()}>
            Reset
          </button>
        </div>
      </div>
      <div>
        <h2>Laps</h2>
        <ul>
          {laps.map((lap, index) => (
            <li key={index}>
              Lap {index + 1}: {formatTime(lap)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
