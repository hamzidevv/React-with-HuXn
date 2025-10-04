import { motion } from "motion/react";
import { useState } from "react";

const cardVariants = {
  hidden: { skewY: 0, rotateY: 0, scale: 1 },
  visible: { skewX: 5, rotateY: 180, scale: 1.2 },
};

const CardFlip = () => {
  return (
    <div className="perspective-[1000px] h-[300vh] pt-300">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-64 h-40 rounded-lg shadow-lg transform-3d"
      >
        <div className="flex absolute inset-0 text-white bg-blue-500 rounded-lg items-center justify-center text-xl font-bold rotate-y-180 backface-hidden">
          Front Side
        </div>
        <motion.div
          animate={{ y: 180 }}
          className="flex absolute inset-0 text-blue-500 bg-white rounded-lg items-center justify-center text-xl font-bold backface-hidden"
        >
          Back Side
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CardFlip;
