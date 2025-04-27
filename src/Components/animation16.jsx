import { motion } from "framer-motion";
import { useState } from "react";

export default function animation16() {
  const [rotation, setRotation] = useState(0); 

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        drag
        dragElastic={0.3}  
        dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
        onDragEnd={() => setRotation(rotation + 120)} 
        style={{ rotate: rotation }}  
        whileDrag={{ scale: 0.9 }}  
        transition={{ type: "spring", stiffness: 300, damping: 30 }} 
        className="w-32 h-32 bg-green-500 rounded-lg shadow-lg cursor-grab"
      >
        Drag Me with Spring
      </motion.div>
    </div>
  );
}
