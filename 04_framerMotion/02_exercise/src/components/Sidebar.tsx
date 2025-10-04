import { motion } from "motion/react";
import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <motion.div
        className={`fixed left-0 top-0 h-full bg-gray-800 text-white p-4`}
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-95%" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-lg font-bold">Sidebar</h2>
        <p>Some random content that will goes here.</p>
        <button
        className="absolute top-1/2 transform -translate-y-1/2 -right-4 p-2 bg-teal-700 text-white rounded-full cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </button>
      </motion.div>
    </div>
  );
};

export default Sidebar;
