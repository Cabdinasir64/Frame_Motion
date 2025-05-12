import { motion } from "framer-motion";

export default function StaggeredList() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    };

    return (
        <motion.ul
            className="space-y-4 mt-16"
            variants={container}
            initial="hidden"
            animate="show"
        >
            {["Item One", "Item Two", "Item Three", "Item Four"].map((text, i) => (
                <motion.li
                    key={i}
                    variants={item}
                    className="bg-indigo-500 text-white px-6 py-3 rounded-lg shadow-md"
                >
                    {text}
                </motion.li>
            ))}
        </motion.ul>
    );
}
