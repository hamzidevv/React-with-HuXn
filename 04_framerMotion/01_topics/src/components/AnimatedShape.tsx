import { motion, scale } from "motion/react";

const AnimatedShape = () => {
  const boxVariants = {
    initial: {
      scale: 1,
      rotate: 0,
      skewX: 0,
    },
    hover: {
      scale: 1.2,
      rotate: 15,
      skewX: "10deg",
      transition: { duration: 0.3 },
    },
    click: {
      scale: 0.9,
      rotate: -15,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="box"
      variants={boxVariants}
      initial="initial"
      whileHover="hover"
      whileTap="click"
    />
  );
};

export default AnimatedShape;
