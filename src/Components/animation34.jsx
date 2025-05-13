import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["Home", "Services", "About", "Contact"];

export default function AnimatedTabs() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <div className="flex space-x-2 bg-white rounded-xl p-2 shadow-lg relative">
        {tabs.map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="relative px-4 py-2 text-sm font-medium z-10"
            style={{
              color: activeTab === tab ? "white" : "#1f2937", 
            }}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-blue-500 rounded-lg z-[-1]"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            {tab}
          </motion.button>
        ))}
      </div>

      <div className="mt-10 w-full max-w-md h-60 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="absolute w-full h-full bg-white rounded-xl shadow-lg flex items-center justify-center text-2xl font-semibold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            layout
          >
            {activeTab}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
