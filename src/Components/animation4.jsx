import React from 'react';
import { motion } from 'framer-motion';

const Animation4 = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <motion.div
                initial={{
                    rotate: 0,
                    borderRadius: "0%",
                    scale: 0,
                }}
                animate={{
                    rotate: [0, 180, 360],
                    borderRadius: ["0%", "20%", "38%", "50%"],
                    scale: [0, 1, 2, 1],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop",
                }}
                className="w-24 h-24 bg-blue-400"
            />
        </div>
    );
};

export default Animation4;