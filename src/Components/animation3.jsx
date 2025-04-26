import { motion } from "framer-motion";

const Animation3 = () => {
  return (
    <div className="flex justify-center items-center h-screen">
       <motion.div
      initial={{ rotate: 0, backgroundColor: "#FF0000" }}
      animate={{
        rotate: [0, 180, 360],
        backgroundColor: ["#FF0000", "#FFFF00", "#00FF00"], 
      }}
      transition={{
        duration: 3,
        repeat: Infinity,  
        repeatType: "loop", 
      }}
      className="w-24 h-24" 
    />
    </div>
  );
};

export default Animation3;