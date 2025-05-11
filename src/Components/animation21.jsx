import { motion } from "framer-motion";

export default function ScrollCards() {
  return (
    <div className="min-h-[400vh] flex flex-col items-center justify-center space-y-20 py-20 bg-gray-100">

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-72 h-40 bg-blue-500 text-white flex items-center justify-center rounded-xl shadow-lg text-xl font-semibold"
      >
        From Left
      </motion.div>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-72 h-40 bg-green-500 text-white flex items-center justify-center rounded-xl shadow-lg text-xl font-semibold"
      >
        From Right
      </motion.div>

      <motion.div
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-72 h-40 bg-red-500 text-white flex items-center justify-center rounded-xl shadow-lg text-xl font-semibold"
      >
        From Bottom
      </motion.div>

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-72 h-40 bg-purple-500 text-white flex items-center justify-center rounded-xl shadow-lg text-xl font-semibold"
      >
        Center Fade + Zoom
      </motion.div>

    </div>
  );
}
