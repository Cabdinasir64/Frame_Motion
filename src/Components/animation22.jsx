import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollCards() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [500, -300]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center space-y-10 py-20 bg-gray-100"
    >
      <motion.div
        style={{ rotate }}
        className="w-72 h-40 bg-blue-500 text-white flex items-center justify-center rounded-xl shadow-lg text-xl font-semibold"
      >
        Rotate
      </motion.div>

      <motion.div
        style={{ scale }}
        className="w-72 h-40 bg-green-500 text-white flex items-center justify-center rounded-xl shadow-lg text-xl font-semibold"
      >
        Scale
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="w-72 h-40 bg-red-500 text-white flex items-center justify-center rounded-xl shadow-lg text-xl font-semibold"
      >
        Fade
      </motion.div>

      <motion.div
        style={{ y }}
        className="w-72 h-40 bg-purple-500 text-white flex items-center justify-center rounded-xl shadow-lg text-xl font-semibold"
      >
        Slide Up
      </motion.div>
    </div>
  );
}
