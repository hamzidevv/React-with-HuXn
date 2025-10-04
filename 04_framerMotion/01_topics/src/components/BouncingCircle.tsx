import { motion } from "motion/react";

const BouncingCircle = () => {
  return (
    <motion.div
      className="box rounded-full"
      animate={{ y: [0, -100, 0] }}
      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
    />
  );
};

export default BouncingCircle;
