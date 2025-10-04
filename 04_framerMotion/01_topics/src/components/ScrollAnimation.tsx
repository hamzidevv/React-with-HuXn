import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";

const ScrollAnimation = () => {
  const { scrollY } = useScroll();
    // useMotionValueEvent(scrollY, "change", (latest) => {
    //     console.log("Scroll Y: ", latest)
    // })
    const scale = useTransform(scrollY, [100, 300], [1, 1.5])
    const opacity = useTransform(scrollY, [100, 300], [1, 0])

  return <div>
    {/* <h1 className="text-center text-3xl">Scroll Animation</h1>
    <div className="h-[200vh]"></div> */}

    {/* With Transform Hook */}
    <div className="h-[200vh] flex items-center justify-center">
        <motion.div className="bg-blue-500 w-32 h-32 rounded-lg shadow-lg" style={{
            scale,
            opacity
        }}>
            
        </motion.div>
        <div className="w-full h-[150vh]"></div>
    </div>
  </div>;
};

export default ScrollAnimation;
