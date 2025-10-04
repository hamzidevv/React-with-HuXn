import { motion } from "motion/react";

const Gestures = () => {
  return (
    <div>
      {/* While Hover */}
      {/* <motion.div
        className="box"
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      /> */}

      {/* While Tap */}
      {/* <motion.div 
        className="box"
        initial={{ backgroundColor: "teal" }}
        whileTap={{ scale: 0.8, backgroundColor: "crimson", rotate: 2 }}
        transition={{ type: "spring", stiffness: 300 }}
      /> */}

      {/* While Drag */}
      <motion.div
        className="box"
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        whileDrag={{ backgroundColor: "crimson" }}
      />
    </div>
  );
};

export default Gestures;
