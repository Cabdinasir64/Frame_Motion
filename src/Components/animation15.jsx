import { motion } from "framer-motion";

export default function animation15() {
  return (
    <div className="flex flex-col space-y-4">
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        className="w-64 p-4 bg-blue-500 text-white rounded-md shadow-md"
      >
        Draggable Item 1
      </motion.div>

      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        className="w-64 p-4 bg-green-500 text-white rounded-md shadow-md"
      >
        Draggable Item 2
      </motion.div>

      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 100 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="w-64 p-4 bg-red-500 text-white rounded-md shadow-md"
      >
        Draggable Item 3
      </motion.div>
    </div>
  );
}
