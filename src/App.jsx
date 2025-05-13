import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './Components/animation39'
import About from './Components/animation40'

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route
            path="/"
            element={
              <motion.div
                key="home"
                initial={{ opacity: 0, x: -50, y: -50, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                exit={{ opacity: 0, x: 50, y: -50, scale: 0.5 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 30,
                  duration: 0.6,
                }}
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/about"
            element={
              <motion.div
                key="about"
                initial={{ opacity: 0, x: 50, y: 50, skewX: 10, scale: 0.5, skewY: 10 }}
                animate={{ opacity: 1, x: 0, y: 0, skewX: 0, scale: 1, skewY: 0 }}
                exit={{ opacity: 0, x: -50, y: 50, skewX: 10, scale: 0.5, skewY: 10 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 30,
                  duration: 0.6,
                }}
              >
                <About />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </Router >
  );
}

export default App;