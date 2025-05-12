import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ButtonTriggeredAnimation() {
  const [showItems, setShowItems] = useState(false);

  const containerVariants = {
    hidden: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1, 
      },
    },
    show: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const variants = {
    bottom: {
      hidden: { opacity: 0, y: 80 },
      show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    },
    rotate: {
      hidden: { opacity: 0, rotate: -90 },
      show: { opacity: 1, rotate: 0, transition: { duration: 0.6 } },
    },
    scaleFade: {
      hidden: { opacity: 0, scale: 0.5 },
      show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-10">
      <button
        onClick={() => setShowItems(!showItems)}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        {showItems ? "Hide Items" : "Show Items"}
      </button>

      <AnimatePresence>
        {showItems && (
          <motion.div
            key="cards"
            className="flex flex-col items-center space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <motion.div
              className="w-64 h-32 bg-green-500 text-white flex items-center justify-center rounded-xl shadow-lg"
              variants={variants.bottom}
            >
              From Bottom
            </motion.div>

            <motion.div
              className="w-64 h-32 bg-yellow-400 text-black flex items-center justify-center rounded-xl shadow-lg"
              variants={variants.rotate}
            >
              Rotated
            </motion.div>

            <motion.div
              className="w-64 h-32 bg-purple-600 text-white flex items-center justify-center rounded-xl shadow-lg"
              variants={variants.scaleFade}
            >
              Scale + Fade
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
