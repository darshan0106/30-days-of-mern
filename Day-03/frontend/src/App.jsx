import { useState } from "react";
import faqs from "./data/data";
import Accordion from "./components/Accordian";

function App() {
  const [openIds, setOpenIds] = useState([]);

  const handleToggle = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((openId) => openId !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-gray-200 min-h-screen p-4">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">FAQs</h1>

        {faqs.map((faq) => (
          <Accordion
            key={faq.id}
            faq={faq}
            isOpen={openIds.includes(faq.id)}
            onToggle={() => handleToggle(faq.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
