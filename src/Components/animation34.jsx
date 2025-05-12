import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["Home", "Services", "About", "Contact"];

export default function AnimatedTabs() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <div className="flex space-x-4 bg-white rounded-xl p-2 shadow-lg">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="relative px-4 py-2 text-sm font-medium text-gray-700"
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 bottom-0 h-1 bg-blue-500 rounded"
              />
            )}
          </button>
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
