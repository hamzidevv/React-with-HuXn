import { motion } from "motion/react";

const StaggeredBoxes = () => {
  const boxes: string[] = ["Box 1", "Box 2", "Box 3", "Box 4", "Box 5"];
  const boxVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <motion.div
      variants={boxVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.3 }}
      className="flex flex-col items-center justify-center gap-4 h-[300vh]"
    >
      {boxes.map((box) => (
        <motion.div
          key={box}
          className="p-8 bg-yellow-200 text-black rounded"
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        >
          {box}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggeredBoxes;
