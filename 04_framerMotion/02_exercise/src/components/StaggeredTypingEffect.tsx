import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
  "UI/UX Designer",
];

const StaggeredTypingEffect = () => {
  const [visibleText, setVisibleText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    let currentIndex = currentIndexRef.current;
    let isDeleting = false;
    let currentRole = 0;

    const typeLoop = async () => {
      while (true) {
        if (!isDeleting) {
          setShowCursor(true);
          if (currentIndex <= roles[currentRole].length) {
            setVisibleText(roles[currentRole].slice(0, currentIndex));
            currentIndex++;
            currentIndexRef.current = currentIndex;
          } else {
            currentIndex = roles[currentRole].length;
            isDeleting = true;
            await new Promise((res) => setTimeout(res, 2000)); // Pause before erasing
          }
        } else {
          setShowCursor(false);
          if (currentIndex >= 0) {
            setVisibleText(roles[currentRole].slice(0, currentIndex));
            currentIndex--;
            currentIndexRef.current = currentIndex;
          } else {
            currentIndex = 0;
            isDeleting = false;
            await new Promise((res) => setTimeout(res, 1000)); // Pause before typing again
            currentRole = (currentRole + 1) % roles.length;
          }
        }

        await new Promise((res) => setTimeout(res, 50)); // Typing speed
      }
    };

    typeLoop();
  }, []);

  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-4xl font-bold text-white">
        Hamzi <span className="text-[#9dff8e]"> Dev!</span>
      </h1>
      <span className="text-2xl font-mono flex text-[#4f5b50]">
        {visibleText
          ? visibleText.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                transition={{
                  opacity: { duration: 0.1 },
                  width: { duration: 0.1 },
                }}
                className="inline-block overflow-hidden"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))
          : "\u00A0"}

        {/* Blinking cursor */}
        {showCursor && (
          <motion.span
            className={`w-[2px] bg-[#4f5b50] ml-1 ${
              currentIndexRef.current <= 0 ? "hidden" : "inline-block"
            }`}
            animate={{
              opacity:
                currentIndexRef.current <= 0 ? 1 : [1, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              ease: "easeInOut",
            }}
          />
        )}
      </span>
    </div>
  );
};

export default StaggeredTypingEffect;
