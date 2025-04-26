import { motion } from "framer-motion";

const Animation2 = () => {


    return (
      <>
        <div className="h-screen flex items-center justify-center bg-gradient-to-br from-pink-300 to-slate-200">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: 360, x: -50, y: 50 }}
            animate={{ opacity: 1, scale: 1, rotate: 0, x: 0, y: 0 }}
            transition={{ duration: 1.3, type: "spring", stiffness: 200 }}
            className="text-4xl font-bold text-white"
          >
            Animation 2
          </motion.div>
        </div>
      </>
    );

}
export default Animation2;