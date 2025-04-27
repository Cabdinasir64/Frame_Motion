import { motion } from "framer-motion";

export default function animation12() {
    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <motion.div
                drag="y"
                dragConstraints={{ top: 0, bottom: 100 }}
                whileDrag={{ scale: 1.2, rotate: 10 }}
                className="w-32 h-32 bg-blue-500 rounded-lg shadow-lg cursor-grab"
            >
            </motion.div>
        </div>
    );
}
