import { motion } from "framer-motion";

export default function PerItemScrollAnimation() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-[200vh] flex flex-col items-center space-y-8 pt-20">
      {[1, 2, 3, 4, 5].map((num) => (
        <motion.div
          key={num}
          className="w-64 h-32 bg-blue-600 text-white flex items-center justify-center rounded-xl shadow-lg mt-96"
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 1 }}
        >
          Item {num}
        </motion.div>
      ))}
    </div>
  );
}
