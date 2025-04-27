import { motion, useScroll, useTransform } from "framer-motion";

export default function animation11() {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.5, 2]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <div className="h-[200vh] flex items-center justify-center bg-gray-100">
            <motion.div
                style={{ scale, opacity }}
                className="w-40 h-40 bg-blue-500 rounded-xl shadow-lg"
            >
            </motion.div>
        </div>
    );
}
