import Modal from "./components/Modal";
import { useModal } from "./hooks/useModal";

function App() {
  const { isOpen, open, close } = useModal();

  return (
    <div className="flex justify-center items-center h-screen">
      <button onClick={open}>Open Modal</button>

      <Modal isOpen={isOpen} onClose={close}>
        <h2 className="text-lg font-bold mb-4">Modal Title</h2>
        <p>This is a simple modal dialog.</p>
      </Modal>
    </div>
  );
}

export default App;
