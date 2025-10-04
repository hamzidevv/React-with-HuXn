import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const DraggableBox = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useMotionValueEvent(x, "change", (latestX) => {
    setPosition((prev) => ({ ...prev, x: latestX }));
  });

  useMotionValueEvent(y, "change", (latestY) => {
    setPosition((prev) => ({ ...prev, y: latestY }));
  });

  return (
    <motion.div
      className="box"
      drag
      dragConstraints={{ top: 100, left: -100, right: 100, bottom: -100 }}
      style={{ x, y }}
    >
      <p>
        Position: ({position.x.toFixed(2)}, {position.y.toFixed(2)})
      </p>
    </motion.div>
  );
};

export default DraggableBox;
