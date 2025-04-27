import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";


    function animation10() {
        const [show, setShow] = useState(false);
        return (
            <div className="h-screen flex items-center justify-center">
                <div>
                    <button onClick={() => setShow(!show)}>Toggle</button>

                    <AnimatePresence>
                        {show && (
                            <motion.div
                                key="box"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                style={{
                                    width: 100,
                                    height: 100,
                                    backgroundColor: "tomato",
                                    margin: "20px auto"
                                }}
                            />
                        )}
                    </AnimatePresence>
                </div>
            </div>
        );
    }
export default animation10;