import { motion } from "framer-motion";

export default function StaggeredCustomChildren() {
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
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const rotate = {
    hidden: { opacity: 0, rotate: -180 },
    show: { opacity: 1, rotate: 0, transition: { duration: 0.6 } },
  };

  const scaleFade = {
    hidden: { opacity: 0, scale: 0.5 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="flex flex-col items-center space-y-6 mt-20"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div
        className="w-64 h-32 bg-purple-500 text-white flex items-center justify-center rounded-xl"
        variants={fadeLeft}
      >
        From Left
      </motion.div>

      <motion.div
        className="w-64 h-32 bg-yellow-500 text-black flex items-center justify-center rounded-xl"
        variants={rotate}
      >
        Rotated In
      </motion.div>

      <motion.div
        className="w-64 h-32 bg-pink-500 text-white flex items-center justify-center rounded-xl"
        variants={scaleFade}
      >
        Fade + Scale
      </motion.div>
    </motion.div>
  );
}
