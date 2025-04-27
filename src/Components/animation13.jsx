import { motion } from "framer-motion";

export default function animation3() {
  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center justify-center space-y-8">
      
      <motion.div
        drag
        className="w-32 h-32 bg-blue-500 rounded-lg shadow-lg cursor-grab"
      >
        Free Drag
      </motion.div>
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
        className="w-32 h-32 bg-green-500 rounded-lg shadow-lg cursor-grab"
      >
        Constrained Drag
      </motion.div>
      <motion.div
        drag
        whileDrag={{ scale: 1.2, rotate: 45 }}
        className="w-32 h-32 bg-red-500 rounded-lg shadow-lg cursor-grab"
      >
        Drag with Effect
      </motion.div>
    </div>
  );
}
