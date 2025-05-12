import { motion } from "framer-motion";

export default function ScrollStaggeredSection() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const fadeFromBottom = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-[300vh] flex items-center justify-center">
      <motion.div
        className="flex flex-col items-center space-y-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="w-64 h-32 bg-blue-600 text-white flex items-center justify-center rounded-xl"
          variants={fadeFromBottom}
        >
          Scroll Item 1
        </motion.div>

        <motion.div
          className="w-64 h-32 bg-green-600 text-white flex items-center justify-center rounded-xl"
          variants={fadeFromBottom}
        >
          Scroll Item 2
        </motion.div>

        <motion.div
          className="w-64 h-32 bg-red-600 text-white flex items-center justify-center rounded-xl"
          variants={fadeFromBottom}
        >
          Scroll Item 3
        </motion.div>
      </motion.div>
    </div>
  );
}
