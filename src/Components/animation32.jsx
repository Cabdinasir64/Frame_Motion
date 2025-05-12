import { motion } from "framer-motion";
import { useState } from "react";

export default function LayoutExample() {
  const [isBig, setIsBig] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <button
        onClick={() => setIsBig(!isBig)}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg"
      >
        Toggle Size
      </button>

      <motion.div
        layout
        className={`bg-purple-500 rounded-lg ${
          isBig ? "w-80 h-80" : "w-40 h-40"
        }`}
      />
    </div>
  );
}
