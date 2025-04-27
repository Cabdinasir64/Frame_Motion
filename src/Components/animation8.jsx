import React from 'react';
import { motion } from "framer-motion";


const Animation8 = () => {
    const variants = {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    };

    return (
      <div className="flex justify-center items-center min-h-screen">
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{delay: 0.5, duration: 5 }}
          className="text-2xl font-bold text-center text-gray-900"
        >
          Hello World
        </motion.div>
      </div>
    );
};

export default Animation8;

