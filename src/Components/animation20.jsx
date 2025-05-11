import { motion, useScroll } from "framer-motion";

export default function ScrollProgressBar() {
    const { scrollYProgress } = useScroll();

    return (
        <div>
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-cyan-800 origin-left z-50"
                style={{ scaleX: scrollYProgress }}
            />
            <div className="h-[300vh] p-8">
                <h1 className="text-3xl font-bold">Scroll down to see progress</h1>
            </div>
        </div>
    );
}
