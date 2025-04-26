import React from 'react';
import { motion } from 'framer-motion';

const Animation6 = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-lime-200">
            <motion.div
                initial={{
                    rotate: 0,
                    borderRadius: "0%",
                    scale: 0,
                }}
                animate={{
                    scale: 1,
                    borderRadius: "50%",
                    rotate: 360,


                }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop",
                }}
                className="w-24 h-24 bg-blue-400"
            />
        </div>
    );
};

export default Animation6;
