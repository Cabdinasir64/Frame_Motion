import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './Components/animation39'

function App() {
  return (
    <Router>
      <div className="font-sans bg-gray-100 min-h-screen">
        {/* Navigation */}
        <nav className="bg-blue-600 p-4">
          <ul className="flex justify-center space-x-8">
            <li>
              <Link to="/" className="text-white text-lg">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-white text-lg">About</Link>
            </li>
          </ul>
        </nav>

        {/* Page Transitions */}
        <AnimatePresence mode="wait">
          <Routes>
            <Route
              path="/"
              element={
                <motion.div
                  key="home"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
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
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <About />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
