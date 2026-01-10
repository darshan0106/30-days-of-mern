import { useState, useEffect } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const trimmedValue = inputValue.trim();
      if (trimmedValue === "") return;

      setLogs((prevLogs) => [...prevLogs, `Input value is: ${trimmedValue}`]);
    }, 500);
    return () => clearTimeout(timer);
  }, [inputValue]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-4">
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          className="border p-2"
        />
        <p className="text-lg font-semibold">{inputValue}</p>
        <div className="mt-4">
          <h2 className="text-xl font-bold">Logs</h2>
          <ul className="list-disc list-inside">
            {logs &&
              logs.map((log, index) => (
                <li key={index} className="text-gray-700">
                  {log}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
