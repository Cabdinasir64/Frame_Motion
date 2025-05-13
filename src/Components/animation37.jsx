// AnimatedCard.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedCard({ setSelected }) {
  return (
    <motion.div
      layoutId="card"
      onClick={() => setSelected(true)}
      className="w-40 h-40 bg-blue-500 rounded-lg cursor-pointer"
    />
  );
}
