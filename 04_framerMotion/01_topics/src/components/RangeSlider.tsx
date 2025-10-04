import { motion, useMotionValue, useSpring } from "motion/react";
import type { ChangeEvent } from "react";

const RangeSlider = () => {
//   const scale = useMotionValue(1);
  const scale = useSpring(1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    scale.set(parseFloat(e.target.value));
  };
  return (
    <div>
      <motion.button className="box" style={{ scale }}/>

      <div className="mt-[6rem]">
        <input
          className="block relative w-[80%] mx-auto z-10"
          type="range"
          min={0.5}
          max={5}
          step={0.01}
          defaultValue={1}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
