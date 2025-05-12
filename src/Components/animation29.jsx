import { motion } from "framer-motion";

export default function IndividualAnimatedItems() {
  const variants = {
    left: {
      hidden: { opacity: 0, x: -100 },
      show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    },
    right: {
      hidden: { opacity: 0, x: 100 },
      show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    },
    bottom: {
      hidden: { opacity: 0, y: 100 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    },
    rotate: {
      hidden: { opacity: 0, rotate: -90 },
      show: {
        opacity: 1,
        rotate: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    },
    scaleFade: {
      hidden: { opacity: 0, scale: 0.5 },
      show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    },
  };

  return (
    <div className="min-h-[250vh] flex flex-col items-center space-y-10 pt-[600px]">
      <motion.div
        className="w-64 h-32 bg-blue-500 text-white flex items-center justify-center rounded-xl shadow-lg"
        variants={variants.left}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        From Left
      </motion.div>

      <motion.div
        className="w-64 h-32 bg-green-500 text-white flex items-center justify-center rounded-xl shadow-lg"
        variants={variants.right}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        From Right
      </motion.div>

      <motion.div
        className="w-64 h-32 bg-pink-500 text-white flex items-center justify-center rounded-xl shadow-lg"
        variants={variants.bottom}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        From Bottom
      </motion.div>

      <motion.div
        className="w-64 h-32 bg-yellow-400 text-black flex items-center justify-center rounded-xl shadow-lg"
        variants={variants.rotate}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        Rotated
      </motion.div>

      <motion.div
        className="w-64 h-32 bg-purple-600 text-white flex items-center justify-center rounded-xl shadow-lg"
        variants={variants.scaleFade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        Scale + Fade
      </motion.div>
    </div>
  );
}
