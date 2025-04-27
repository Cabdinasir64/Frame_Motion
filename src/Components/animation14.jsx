import { motion } from "framer-motion";
import { b } from "framer-motion/client";

export default function animation14() {
  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center justify-center space-y-8">
      \{" "}
      <motion.div
        whileHover={{ scale: 1.2, rotate: 45 }}
        className="w-32 h-32 bg-blue-500 rounded-lg shadow-lg cursor-pointer"
      >
        Hover Me
      </motion.div>
      <motion.div
        whileTap={{ scale: 0.8 }}
        onTap={() => alert("Tapped!")}
        className="w-32 h-32 bg-green-500 rounded-lg shadow-lg cursor-pointer"
      >
        Tap Me
      </motion.div>
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
        onDragStart={() => alert("Drag Started")}
        onDragEnd={() => alert("Drag Ended")}
        className="w-32 h-32 bg-red-500 rounded-lg shadow-lg cursor-grab"
      >
        Drag Me
      </motion.div>
      <motion.div
        drag
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        onDragStart={{ scale: 0.8 }}
        onDragEnd={() => alert("Drag Ended")}
        className="w-32 h-32 bg-purple-500 rounded-lg shadow-lg cursor-pointer"
      >
        Interactive Box
      </motion.div>
    </div>
  );
}
