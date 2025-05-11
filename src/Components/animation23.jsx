import { motion } from "framer-motion";

export default function StaggeredAnimation() {
  return (
    <motion.div
      className="flex flex-col items-center space-y-6 mt-20"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {
          opacity: 0,
          transition: { staggerChildren: 0.5 }, 
        },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.5, 
            delayChildren: 0.2,
          },
        },
      }}
    >
      {/* Child 1 */}
      <motion.div
        className="w-64 h-32 bg-blue-500 text-white flex items-center justify-center rounded-xl"
        variants={{
          hidden: { opacity: 0, y: 50 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        Card 1
      </motion.div>

      {/* Child 2 */}
      <motion.div
        className="w-64 h-32 bg-green-500 text-white flex items-center justify-center rounded-xl"
        variants={{
          hidden: { opacity: 0, y: 60 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        Card 2
      </motion.div>

      {/* Child 3 */}
      <motion.div
        className="w-64 h-32 bg-red-500 text-white flex items-center justify-center rounded-xl"
        variants={{
          hidden: { opacity: 0,x: 70 },
          show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
        }}
      >
        Card 3
      </motion.div>
    </motion.div>
  );
}
