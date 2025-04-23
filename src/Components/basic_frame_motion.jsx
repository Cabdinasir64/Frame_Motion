import { motion } from "framer-motion";

export default function MyComponent() {
  return (
    <motion.h1
      initial={{ opacity: 0, x: -500  }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1,}}
      dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
      dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
      className="bg-blue-500 text-white p-4 rounded-lg text-center overflow-hidden"
    >
      Hello World!
    </motion.h1>
  );
}
