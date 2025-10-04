import { motion } from "motion/react";

const Box = () => {
  return <motion.div
        className="box" 
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
    />
};

export default Box;
