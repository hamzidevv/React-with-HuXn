import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";

const MotionFaReact = motion(FaReact);

const SpinningIcon = () => {
  return (
    <MotionFaReact
      animate={{
        rotate: 360,
        scale: [1, 1.5, 1],
        color: ["#61dafb", "#9dff8e", "#61dafb"],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "linear",
      }}
      size={80}
      style={{ display: "block", margin: "auto" }}
    />
  );
};

export default SpinningIcon;
