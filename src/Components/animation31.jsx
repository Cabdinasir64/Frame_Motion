import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function ExpandingNavbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      } 
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  const topLineVariants = {
    open: { rotate: 45, y: 7, backgroundColor: "#ffffff" },
    closed: { rotate: 0, y: 0, backgroundColor: "#ffffff" },
  };
  
  const middleLineVariants = {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  };
  
  const bottomLineVariants = {
    open: { rotate: -45, y: -7, backgroundColor: "#ffffff" },
    closed: { rotate: 0, y: 0, backgroundColor: "#ffffff" },
  };

  return (
    <div className="fixed w-full z-50">
      {/* Navbar */}
      <motion.nav 
        className={`px-4 py-3 flex justify-between items-center transition-colors duration-300 ${scrolled ? 'bg-blue-700 shadow-lg' : 'bg-blue-600'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <div className="text-2xl font-bold text-white">Logo</div>

        {/* Desktop Navbar Links */}
        <div className="hidden lg:flex space-x-6">
          <motion.a 
            href="#" 
            className="text-white text-lg relative group"
            whileHover={{ scale: 1.05 }}
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
          <motion.a 
            href="#" 
            className="text-white text-lg relative group"
            whileHover={{ scale: 1.05 }}
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
          <motion.a 
            href="#" 
            className="text-white text-lg relative group"
            whileHover={{ scale: 1.05 }}
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
          <motion.a 
            href="#" 
            className="text-white text-lg relative group"
            whileHover={{ scale: 1.05 }}
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.div
          className="lg:hidden cursor-pointer p-2"
          onClick={() => setShowMenu(!showMenu)}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            className="w-6 h-0.5 mb-1.5"
            variants={topLineVariants}
            animate={showMenu ? "open" : "closed"}
          />
          <motion.div
            className="w-6 h-0.5 mb-1.5"
            variants={middleLineVariants}
            animate={showMenu ? "open" : "closed"}
          />
          <motion.div
            className="w-6 h-0.5"
            variants={bottomLineVariants}
            animate={showMenu ? "open" : "closed"}
          />
        </motion.div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            className="fixed inset-0 bg-blue-600/95 backdrop-blur-sm"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <motion.div
              className="flex flex-col items-center justify-center h-full px-4"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              {["Home", "About", "Services", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-white text-3xl py-4 font-medium relative overflow-hidden"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowMenu(false)}
                >
                  {item}
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}

              {/* Close button */}
              <motion.button
                className="absolute top-6 right-6 text-white text-2xl p-2"
                onClick={() => setShowMenu(false)}
                variants={itemVariants}
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}