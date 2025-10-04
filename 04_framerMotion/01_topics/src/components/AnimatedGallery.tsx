import { motion } from "motion/react";
import { useState } from "react";

const galleryImages = [
  "https://images.unsplash.com/photo-1520342868574-5fa3804e551c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6ff92caffcdd63681a35134a6770ed3b&auto=format&fit=crop&w=1951&q=80",
  "https://images.unsplash.com/photo-1446034295857-c39f8844fad4?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1559666126-84f389727b9a?q=80&w=3877&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1446034295857-c39f8844fad4?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1559666126-84f389727b9a?q=80&w=3877&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      staggerDirection: 1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedGallery = () => {
  const [showImages, setShowImages] = useState<boolean>(false);

  return (
    <div>
      <button
        className="mb-[2rem] p-4 rounded-lg bg-yellow-300 text-black font-bold"
        onClick={() => setShowImages((prev) => !prev)}
      >
        {showImages ? "Hide Images" : "Show Images"}
      </button>

      <motion.div
        className="flex flex-wrap gap-y-[2rem]"
        variants={parentVariants}
        initial="hidden"
        animate={showImages ? "visible" : "hidden"}
      >
        {galleryImages.map((image, index) => (
          <motion.img
            variants={childVariants}
            src={image}
            key={index}
            className="ml-[2rem] w-[300px] rounded"
            alt={`Image ${index + 1}`}
            drag
            dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedGallery;
