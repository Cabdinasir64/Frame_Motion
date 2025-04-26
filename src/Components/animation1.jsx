import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Animation1 = () => {
    const [show, setShow] = useState(false);
    
    return (
        <div className="bg-blue-300 flex items-center justify-center h-screen font-sans">
            <button
                className="px-3 py-2 bg-gray-100 transition-all duration-300 hover:bg-gray-200 rounded-lg"
                onClick={() => setShow(!show)}
            >
                {show ? "Hide" : "Show"}
            </button>
            
                {show && (
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[200px] w-full rounded-lg flex items-center justify-center h-[200px] bg-violet-700 p-4"
                        initial={{ 
                            scale: 0,
                            opacity: 0,
                            x: "-50%",
                            y: "-50%"
                        }}
                        animate={{ 
                            scale: 1,
                            opacity: 1,
                            x: "-50%",
                            y: "-50%",
                            
                        }}
                        transition={{ 
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}
                    >
                        <motion.h1 
                            className="text-2xl font-bold text-white whitespace-nowrap"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            Box pop modal
                        </motion.h1>
                    </motion.div>
                )}
        </div>
    );
};

export default Animation1;