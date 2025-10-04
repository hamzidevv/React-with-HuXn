import { motion } from "motion/react";
import { useState } from "react";

const items = [
  {
    title: "Item 1",
    content: "Content for Item 1",
  },
  {
    title: "Item 2",
    content: "Content for Item 2",
  },
  {
    title: "Item 3",
    content: "Content for Item 3",
  },
  {
    title: "Item 4",
    content: "Content for Item 4",
  },
  {
    title: "Item 5",
    content: "Content for Item 5",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return <div className="space-y-4 w-[70vw]">
    {items.map((item, index) => (
        <div key={index}>
            <motion.button
                className="w-full text-left p-4 border-2 border-gray-200 text-black text-xl font-semibold rounded-tr rounded-tl cursor-pointer focus:outline-none"
                onClick={() => toggleItem(index)}
                initial={{ backgroundColor: "#f0f0f0" }}
                animate={{ backgroundColor: openIndex === index ? "#FA812F" : "#f0f0f0" }}
                transition={{ duration: 0.1 }}
                whileHover={{ backgroundColor: openIndex === index ? "#FA812F": "#D1D3D4", transition: { duration: 0.3 } }}
            >
                {item.title}
            </motion.button>
            <motion.div
                className="overflow-hidden"
                initial={{ height: 0 }}
                animate={{ height: openIndex === index ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="p-6 bg-gray-200 text-gray-800">{item.content}</div>
            </motion.div>
        </div>
    ))}
  </div>;
};

export default Accordion;
