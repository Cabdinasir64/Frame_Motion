import { motion } from "framer-motion";
export default function FullscreenModal({ setSelected }) {
  return (
    <motion.div
      layoutId="card" 
      onClick={() => setSelected(false)}
      className="fixed inset-0 bg-blue-500 flex items-center justify-center z-50"
    >
      <p className="text-white text-2xl">Full Details</p>
    </motion.div>
  );
}
