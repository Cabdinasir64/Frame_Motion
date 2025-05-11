import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Animation18() {
  const y = useMotionValue(0);
  const backgroundColor = useTransform(y, [0, 100], ["#ef4444", "#facc15"]);

  return (
    <div className="flex flex-col space-y-4 items-center p-8">
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        className="w-64 p-4 bg-blue-500 text-white rounded-md shadow-md cursor-grab"
      >
        Draggable Item 1
      </motion.div>

      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        className="w-64 p-4 bg-green-500 text-white rounded-md shadow-md cursor-grab"
      >
        Draggable Item 2
      </motion.div>

      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 100 }}
        style={{ y, backgroundColor }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="w-64 p-4 text-white rounded-md shadow-md cursor-grab"
      >
        Draggable Item 3 (Drag me down!)
      </motion.div>
    </div>
  );
}
