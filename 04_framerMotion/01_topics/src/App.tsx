import { motion } from "motion/react";
import BouncingLoader from "./components/BouncingLoader";
import { useState } from "react";
import { variants } from "./variants";
import FlippingCard from "./components/FlippingCard";
import Gestures from "./components/Gestures";
import AnimatedCard from "./components/AnimatedCard";
import ImageGallery from "./components/ImageGallery";
import AnimatedShape from "./components/AnimatedShape";
import StaggerAnimation from "./components/StaggerAnimation";
import AnimatedGallery from "./components/AnimatedGallery";
import RangeSlider from "./components/RangeSlider";
import DraggableBox from "./components/DraggableBox";
import AnimatedCard2 from "./components/AnimatedCard2";
import ScrollAnimation from "./components/ScrollAnimation";
import AnimationScroll from "./components/AnimationScroll";
import Box from "./components/Box";
import BouncingCircle from "./components/BouncingCircle";
import SpinningIcon from "./components/SpinningIcon";

const App = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true); // for Variant
  return (
    <div>
      {/* <motion.div className="box" animate={{ x: 30 }} /> */}
      {/* <motion.div className="box" animate={{ y: 30 }} /> */}

      {/* <motion.div className="box" animate={{ rotateX: 60 }} /> */}
      {/* <motion.div className="box" animate={{ rotateY: 60 }} /> */}
      {/* <motion.div className="box" animate={{ rotate: 60 }} /> */}

      {/* <motion.div className="box" animate={{ scaleX: 2 }} /> */}
      {/* <motion.div className="box" animate={{ scaleY: 2 }} /> */}
      {/* <motion.div className="box" animate={{ scale: .5 }} /> */}

      {/* <motion.div className="box" animate={{ skewX: 30 }} /> */}
      {/* <motion.div className="box" animate={{ skewY: 30 }} /> */}

      {/* Transitions */}
      {/* <motion.div
        className="box"
        initial={{ x: 0 }}
        animate={{ x: 100 }}
        // transition={{ delay: 2 }}
        // transition={{ duration: 2 }}
        transition={{ duration: 1, ease: "backIn" }}
      /> */}

      {/* Key Frames */}
      {/* <motion.div
        className="box"
        animate={{ 
          // scale: [1, 1.1, 1]
          // rotate: [0, 270, 270, 0]
          borderRadius: [ "10%", "10%", "20%", "20%", "50%", "20%", "20%", "10%", "10%"]
        }}
        transition={{ duration: 5, ease: "linear", repeat: Infinity }}
      /> */}
      {/* <BouncingLoader /> */}

      {/* Variants */}
      {/* <motion.div
        className="box"
        variants={variants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        exit="exit"
        transition={{ duration: 1 }}
        onClick={() => setIsVisible((prev) => !prev)}
      /> */}

      {/* <FlippingCard /> */}
      {/* <Gestures /> */}
      {/* <AnimatedCard /> */}
      {/* <ImageGallery /> */}
      {/* <AnimatedShape /> */}
      {/* <StaggerAnimation /> */}
      {/* <AnimatedGallery /> */}
      {/* <RangeSlider /> */}
      {/* <DraggableBox /> */}
      {/* <AnimatedCard2 /> */}
      {/* <ScrollAnimation /> */}
      {/* <AnimationScroll /> */}
      {/* <Box /> */}
      {/* <BouncingCircle /> */}
      <SpinningIcon />
    </div>
  );
};

export default App;
