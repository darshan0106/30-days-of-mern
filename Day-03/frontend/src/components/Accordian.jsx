const Accordion = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="bg-white p-4 mb-2 rounded shadow">
      <button
        onClick={onToggle}
        className="w-full text-left flex justify-between items-center"
      >
        <h2 className="text-lg font-semibold">{faq.question}</h2>
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && <p className="mt-3 text-gray-700">{faq.answer}</p>}
    </div>
  );
};

export default Accordion;
