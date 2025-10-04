import { motion, useMotionValue, useTransform } from "motion/react";

const DraggableBox = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const backgroundColor = useTransform(x, [-100, 100], ["#EA2264", "#640D5F"]);

  return (
    <motion.div
      drag
      dragConstraints={{ top: -200, left: -200, right: 200, bottom: 200 }}
      style={{ x, y, backgroundColor }}
      className="box cursor-pointer"
    >
      <span>Drag Me!</span>
    </motion.div>
  );
};

export default DraggableBox;
