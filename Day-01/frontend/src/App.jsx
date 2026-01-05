import { useState } from "react";

function App() {
  const [color, setColor] = useState("#000000");

  const handleColorChange = () => {
    const chars = "0123456789ABCDEF";
    let randomColor = "#";

    for (let i = 0; i < 6; i++) {
      randomColor += chars[Math.floor(Math.random() * 16)];
    }
    setColor(randomColor);
  };

  return (
    <div className="justify-center items-center flex flex-col min-h-screen bg-gray-100">
      <div className="bg-gray-200 p-5 rounded-lg items-center flex flex-col gap-4">
        <h1
          className="text-4xl font-bold mb-8 bg-linear-to-r from-purple-500 via-pink-500 to-red-500
         bg-clip-text text-transparent"
        >
          Color Generator
        </h1>
        <div className="justify-center items-center flex flex-col gap-4 ">
          <div
            className={`w-60 h-60 rounded-xl shadow-lg flex justify-center items-center cursor-pointer`}
            style={{ backgroundColor: color }}
            onClick={() => {
              navigator.clipboard.writeText(color);
              alert(`Hex code ${color} copied to clipboard!`);
            }}
          >
            <p className="text-white">{color}</p>
          </div>
          <h2>Click the color to copy the hex code</h2>
        </div>
        <div
          className="bg-linear-to-r from-purple-500 via-pink-500 to-red-500
         hover:opacity-90 transition p-1.5 rounded-lg cursor-pointer text-white"
          onClick={() => {
            handleColorChange();
          }}
        >
          Change color
        </div>
      </div>
    </div>
  );
}

export default App;
