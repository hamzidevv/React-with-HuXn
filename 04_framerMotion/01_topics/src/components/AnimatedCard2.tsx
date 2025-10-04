import { motion } from "motion/react";

const AnimatedCard2 = () => {
  return (
    <div className="h-screen">
      <h1 className="text-center text-3xl mb-4 mt-4">
        Scroll Down to see the magic
      </h1>

      <div>
        <div className="flex justify-center items-start mt-[30rem]">
          <div className="w-full h-[200vh] flex justify-center items-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{
                scale: 1.1,
                opacity: 1,
                y: -200,
              }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <h2 className="text-2xl font-bold mb-2 text-black">
                Amazing Card
              </h2>
              <p className="text-gray-600">
                This card animates beautifully into the view!
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard2;
