import { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["Home", "Services", "About", "Contact"];

export default function HoverTabs() {
    const [hoveredTab, setHoveredTab] = useState(null);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="flex space-x-2 bg-white p-2 rounded-xl shadow-lg relative">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onMouseEnter={() => setHoveredTab(tab)}
                        onMouseLeave={() => setHoveredTab(null)}
                        className="relative px-4 py-2 text-sm font-medium z-10"
                        style={{
                            color: hoveredTab === tab ? "black" : "black",
                        }}
                    >
                        {tab}

                        {hoveredTab === tab && (

                            <motion.div
                                layoutId="underline"
                                className="absolute inset-0 bg-blue-500 h-1 rounded-lg z-[-1]"
                                transition={{ type: "spring", stiffness: 100, damping: 30 }}
                            />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}
