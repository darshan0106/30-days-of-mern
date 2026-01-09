import { useState } from "react";
import images from "./assets/images";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="flex flex-col justify-center items-center h-3/4 w-1/2 p-6 rounded-lg">
        <h2 className="font-bold text-xl">Football Stadiums</h2>
        <div className="w-96 h-64 mt-4 overflow-hidden rounded-lg">
          <img
            src={images[currentIndex]}
            alt="Football Stadium"
            className="w-full h-full object-cover transition-transform duration-500"
          />
        </div>
        <div className="mt-4 flex justify-around w-full">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
