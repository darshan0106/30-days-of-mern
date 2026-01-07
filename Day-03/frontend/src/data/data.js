const faqs = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and manage application state efficiently.",
  },
  {
    id: 2,
    question: "What is an Accordion component?",
    answer:
      "An accordion is a UI pattern that allows users to expand and collapse sections of content. It helps organize information and save screen space.",
  },
  {
    id: 3,
    question: "Can multiple accordion items be open at once?",
    answer:
      "Yes, depending on the configuration. Some accordions allow only one item open at a time, while others allow multiple items to be expanded simultaneously.",
  },
  {
    id: 4,
    question: "Where should accordion state be managed in React?",
    answer:
      "For reusable components, accordion open/close state is usually managed in the parent component and passed down as props to individual accordion items.",
  },
  {
    id: 5,
    question: "Why should we avoid using array index as a key?",
    answer:
      "Using array index as a key can cause unexpected UI bugs when items are added, removed, or reordered. A stable unique id is a safer choice.",
  },
];
export default faqs;