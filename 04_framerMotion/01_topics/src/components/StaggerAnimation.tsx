import { motion } from "motion/react";

const parentVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const StaggerAnimation = () => {
  return (
    <motion.div variants={parentVariants} initial="hidden" animate="visible">
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="w-[150px] h-[150px] bg-yellow-500 rounded-lg backdrop-blur-[10px] shadow-lg flex justify-center items-center text-white text-2xl mt-[2rem]"
          variants={childVariants}
        />
      ))}
    </motion.div>
  );
};

export default StaggerAnimation;
