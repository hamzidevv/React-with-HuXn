import { motion } from "motion/react";
import { useState } from "react";

const cardVariants = {
  front: { skewY: 0, rotateY: 0, scale: 1 },
  back: { skewX: 5, rotateY: 180, scale: 1.2 },
};

const FlippingCard = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  return (
    <motion.div
      onClick={() => setIsFlipped(!isFlipped)}
      className="perspective-[1000px]"
    >
      <motion.div
        variants={cardVariants}
        initial="front"
        animate={isFlipped ? "back" : "front"}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-64 h-40 rounded-lg shadow-lg transform-3d"
      >
        <div className="flex absolute inset-0 bg-white text-blue-500 rounded-lg items-center justify-center text-xl font-bold backface-hidden">
          Front Side
        </div>
        <div className="flex absolute inset-0 bg-blue-500 text-white rounded-lg items-center justify-center text-xl font-bold rotate-y-180 backface-hidden">
          Back Side
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FlippingCard;
