import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <>
            {/* Navbar */}
            <div className="font-sans z-50 fixed top-0 left-0 w-full bg-blue-600 shadow-md">
                <nav className="p-4">
                    <ul className="flex justify-center space-x-8">
                        <li>
                            <Link to="/" className="text-white text-lg hover:text-yellow-400 transition duration-300">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-white text-lg hover:text-yellow-400 transition duration-300">
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Content */}
            <div className="flex justify-center items-center min-h-screen bg-yellow-400 pt-20 overflow-x-hidden">
                <h1 className="text-3xl text-center text-blue-800 font-semibold">
                    This is the About Page
                </h1>
            </div>
        </>
    );
}

export default About;
