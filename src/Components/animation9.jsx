import { motion } from "framer-motion";

const buttonVariants = {
  bilow: { 
    opacity: 1, 
    scale: 1, 
    backgroundColor: "#3498db" 
  },
  hover: { 
    scale: 1.1, 
    backgroundColor: "#2980b9" 
  },
  tap: { 
    scale: 0.95, 
    backgroundColor: "#1abc9c" 
  },
  disabled: { 
    opacity: 0.5, 
    scale: 1, 
    backgroundColor: "#95a5a6" 
  }
};

function animation9({ isDisabled }) {
  return (
    <div className="h-screen flex items-center justify-center">
    <motion.button
      variants={buttonVariants}
      initial="bilow"
      animate={isDisabled ? "disabled" : "bilow"}
      whileHover={!isDisabled && "hover"}
      whileTap={!isDisabled && "tap"}
      style={{
        padding: "10px 20px",
        fontSize: "18px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer"
      }}
    >
      {isDisabled ? "Disabled" : "Click Me"}
    </motion.button>
    </div>
  );
}
export default animation9;