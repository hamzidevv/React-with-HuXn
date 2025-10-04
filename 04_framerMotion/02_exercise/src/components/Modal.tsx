import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

  return <div className="flex flex-col items-center">
    <button
        className="mb-4 p-2 bg-green-700 text-white rounded cursor-pointer"
        onClick={() => setIsOpen(true)}
    >Open Modal</button>

    <AnimatePresence>
    {isOpen && (
        <motion.div
            className="fixed inset-0 bg-black flex items-center justify-center"
            onClick={() => setIsOpen(false)}
        >
            <motion.div
                className="bg-white p-4 rounded text-black"
                onClick={(e) => e.stopPropagation()}
                initial={{ y: "-100vh" }}
                animate={{ y: "0vh" }}
                exit={{ y: "100vh" }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-lg font-bold">Modal Title</h2>
                <p>This is some random modal content.</p>
                <button onClick={() => setIsOpen(false)} className="mt-4 p-2 bg-red-500 text-white rounded cursor-pointer">Close</button>
            </motion.div>

        </motion.div>
    )}
    </AnimatePresence>
  </div>;
};

export default Modal;
