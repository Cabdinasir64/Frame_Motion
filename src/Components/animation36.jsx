import { useState } from "react";
import { motion } from "framer-motion";

export default function Accordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      className="bg-white p-4 rounded shadow-md w-80 mx-auto mt-20"
    >
      <div
        className="font-semibold cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        What is Framer Motion?
      </div>

      {isOpen && (
        <motion.div
          layout
          className="mt-2 text-gray-600"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        >
          Framer Motion is a production-ready motion library for React.
        </motion.div>
      )}
    </motion.div>
  );
}
