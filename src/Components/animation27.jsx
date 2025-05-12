import { motion } from "framer-motion";

export default function ScrollStaggeredCustom() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const rotateIn = {
    hidden: { opacity: 0, rotate: -180 },
    show: {
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const scaleFade = {
    hidden: { opacity: 0, scale: 0.5 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-[300vh] flex items-center justify-center">
      <motion.div
        className="flex flex-col items-center space-y-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Fade from left */}
        <motion.div
          className="w-64 h-32 bg-indigo-500 text-white flex items-center justify-center rounded-xl shadow-lg"
          variants={fadeLeft}
        >
          From Left
        </motion.div>

        {/* Rotate in */}
        <motion.div
          className="w-64 h-32 bg-yellow-400 text-black flex items-center justify-center rounded-xl shadow-lg"
          variants={rotateIn}
        >
          Rotated In
        </motion.div>

        {/* Fade in + Scale */}
        <motion.div
          className="w-64 h-32 bg-rose-500 text-white flex items-center justify-center rounded-xl shadow-lg"
          variants={scaleFade}
        >
          Scale + Fade
        </motion.div>
      </motion.div>
    </div>
  );
}
