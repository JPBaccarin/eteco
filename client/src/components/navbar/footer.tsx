'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: 1.6 } }, // Adicionando um atraso 
    };

    return (
        <motion.footer
            className=" text-gray-800 p-4 bg-gradient-to-t from-gray-200 to-gray-100 text-center  transition-all"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
        >
            <p className="text-sm font-light hover:text-gray-950  duration-300">
                Feito por alunos - ETEC Deputado Salim Sedeh - Leme, SP - 2023.
            </p>
        </motion.footer>
    );
};

export default Footer;
