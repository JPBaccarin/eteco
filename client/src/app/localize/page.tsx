'use client'
import React from 'react'
import { motion } from "framer-motion";

function Localize() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{ duration: 1 }}
            className="text-center sm:mt-4 sm:mb-4"
        >
            <h1 className="text-3xl font-semibold my-4">Posições</h1>
            <div className=" text-center">
                <div className="sm:p-4 rounded-xl">
                        <iframe
                            className="google-maps rounded-2"
                            src="https://www.google.com/maps/d/u/3/embed?mid=1DrpLINDgX32G1NszDO1DvsMpG4Y5bCs&ehbc=2E312F"
                            width="100%"
                            height="500"
                            title="Mapa de EcoPontos"
                            
                        ></iframe>
                    
                </div>
            </div>
        </motion.div>
    );
}

export default Localize