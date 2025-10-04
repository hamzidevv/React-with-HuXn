import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      setProgress(v);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="h-[300vh] p-[20px]">
      {/* Indicator */}
      <motion.div
        className={`fixed top-0 left-0 h-[4px] bg-[#9dff8e] ${progress > 0.9999 ? "" : "rounded-r-full"}`}
        style={{ 
            width : lineWidth,
            transition: "width 0.1s ease",
         }} 
        ></motion.div>

      {/* Random Text */}
      <div className="mt-[50px]">
        {[...Array(100)].map((_, i) => (
          <p key={i} className="mt-[20px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
            maiores illum dicta iusto possimus atque eum dolor, modi nobis,
            dolore explicabo iure provident aspernatur consequatur cupiditate
            perferendis minima officiis. Illo quam est veritatis quibusdam,
            voluptate suscipit odio eius similique neque cumque saepe sit animi
            et perferendis. Temporibus quos voluptate non iste laborum eveniet
            commodi neque praesentium. Consectetur nobis mollitia vero
            asperiores officia dicta molestiae!
          </p>
        ))}
      </div>
    </div>
  );
};

export default ScrollIndicator;
