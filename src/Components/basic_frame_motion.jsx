import { motion } from "framer-motion";

export default function MyComponent() {
  return (
    <motion.h1
      initial={{ opacity: 0, x: -500  }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 3,}}
      className="bg-blue-500 text-white p-4 rounded-lg text-center overflow-hidden"
    >
      Hello World!
    </motion.h1>
  );
}
