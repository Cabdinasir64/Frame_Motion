import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function LayoutIdExample() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <AnimatePresence>
        {!showModal && (
          <motion.div
            layoutId="card"
            onClick={() => setShowModal(true)}
            className="w-40 h-40 bg-green-500 rounded-xl cursor-pointer flex items-center justify-center text-white font-bold"
          >
            Click Me
          </motion.div>
        )}

        {showModal && (
          <motion.div
            layoutId="car"
            className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-50"
            onClick={() => setShowModal(false)}
          >
            <motion.div className="w-80 h-80 bg-green-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
              I'm a Modal
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
