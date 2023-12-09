'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone } from 'react-icons/fi';
import Image from 'next/image';
import equipe from './equipe.jpg'

const AboutUs = () => {
    const pageVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: .5 } },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: .7 } },
    };

    const staggerChildren = 0.2;

    return (
        <motion.div
            className="container mx-auto p-4 sm:p-8"
            variants={pageVariants}
            initial="initial"
            animate="animate"
        >
            <h1 className="text-3xl font-bold mb-4">Sobre Nós</h1>

            <motion.p
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-lg leading-7 text-gray-700"
            >
                Somos alunos do 2° ano do ensino médio integrado com técnico de Desenvolvimento de Sistemas da ETEC Deputado Salim Sedeh, localizada em Leme, no interior do estado de São Paulo. Estamos envolvidos em um projeto com nossos professores para criar um site que orienta e auxilia as pessoas no descarte adequado do E-LIXO, com o objetivo de preservar o meio ambiente e a saúde.
            </motion.p>

            <motion.p
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-lg leading-7 text-gray-700 mt-4"
            >
                Através de informações, dicas e recursos, nossa missão é inspirar mudanças positivas em relação ao meio ambiente e à importância do descarte responsável de resíduos eletrônicos.
            </motion.p>

            <motion.p
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-lg leading-7 text-gray-700 mt-4"
            >
                Para saber mais sobre nossas atividades e iniciativas, entre em contato conosco. Estamos comprometidos em promover a conscientização e ação ambiental.
            </motion.p>
            <motion.div className="flex justify-center" >
                <Image alt='foto da equipe' className='rounded-xl sm:w-2/3 m-2 shadow-sm hover:shadow-xl duration-300 border hover:grayscale-0 grayscale ' src={equipe} width={2000} height={2000}></Image>
            </motion.div>

            {/* Seção de Contato com animações e staggering */}
            <motion.section
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="mt-8 p-4 bg-gray-100 rounded-lg border"
            >
                <h2 className="text-2xl font-semibold mb-2">Contato</h2>
                <motion.p
                    variants={textVariants}
                    className="text-gray-700"
                >
                    Entre em contato conosco através do e-mail ou WhatsApp para mais informações e perguntas.
                </motion.p>
                <motion.div
                    variants={textVariants}
                    className="flex items-center mt-4"
                >
                    <FiMail className="text-2xl text-gray-500 mr-2" />
                    <p className="text-gray-700">E-mail: etec.leme@gmail.com</p>
                </motion.div>
                <motion.div
                    variants={textVariants}
                    className="flex items-center mt-2"
                >
                    <FiPhone className="text-2xl text-gray-500 mr-2" />
                    <p className="text-gray-700">WhatsApp: (19) 99999-9999</p>
                </motion.div>

            </motion.section>
        </motion.div>
    );
};

export default AboutUs;
