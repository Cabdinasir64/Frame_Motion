import React from 'react';
import { hover, motion, scale } from 'framer-motion';

const Animation7 = () => {
    const parentVariants = {
        initial: { opacity: 0, y: 50 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.5,
                duration: 2,
            },
        },
    };
    const childVariants1 = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1, type: 'spring', stiffness: 100 }
    };

    const childVariants2 = {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 1.5, delay: 0.5 }
    };

    const childVariants3 = {
      initial: { opacity: 0, scale: 0, x: 120, y: -80 },
      animate: { opacity: 1, scale: 1, x: 0, y: 0 },
      transition: { duration: 1, delay: 1 },
    };

    const childVariants4 = {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 1, type: 'spring', stiffness: 50 }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <motion.div
                className="space-y-4"
                variants={parentVariants} 
                initial="initial"
                animate="animate"
            >
                <motion.div variants={childVariants1} className="w-64 h-16 bg-blue-400 text-white flex justify-center items-center">
                    Link 1
                </motion.div>
                <motion.div variants={childVariants2} className="w-64 h-16 bg-green-400 text-white flex justify-center items-center">
                    Link 2
                </motion.div>
                <motion.div variants={childVariants3} className="w-64 h-16 bg-red-400 text-white flex justify-center items-center">
                    Link 3
                </motion.div>
                <motion.div variants={childVariants4} className="w-64 h-16 bg-yellow-400 text-white flex justify-center items-center">
                    Link 4
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Animation7;
