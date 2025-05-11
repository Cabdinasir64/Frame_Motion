import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function Animation19() {
    const progress = useMotionValue(0);
    const backgroundColor = useTransform(progress, [0, 100], ["#ef4444", "#3b82f6"]);
    const radius = useTransform(progress, [0, 100], [0, 50]);

    useEffect(() => {
        const controls = animate(progress, 100, {
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
        });

        return () => controls.stop(); 
    }, [progress]);

    return (
        <div className="flex flex-col space-y-4">
            <motion.div
                style={{
                    width: 200,
                    height: 100,
                    borderRadius: radius,
                    backgroundColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 18,
                    userSelect: "none",
                }}
            >
                Progress: {progress.get()}%
            </motion.div>
        </div>
    );
}
