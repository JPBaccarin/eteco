'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMenu } from 'react-icons/fi';
import Image from 'next/image';
import logo from '../../../public/imagens';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const logoVariants = {
    hover: {
      scale: 1.1,
      rotate: 20,
    },
  };

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: 'easeOut' } },
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <motion.nav
      className="bg-gray-100/75 backdrop-blur-xl p-4 sticky top-0 shadow-sm z-50"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <motion.p
            variants={logoVariants}
            whileHover="hover"
            className="cursor-pointer"
          >
            <Image
              src={logo}
              alt="eteco"
              width={100}
              height={100}
              className="rounded-full w-12"
            />
          </motion.p>
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/informe">
            <p className="text-gray-500 hover:border-black/20 p-1 rounded-md bg-gray-100 border duration-150 hover:text-black ">Informe-se</p>
          </Link>
          <Link href="/localize">
            <p className="text-gray-500 hover:border-black/20 p-1 rounded-md bg-gray-100 border duration-150 hover:text-black ">Localize-se</p>
          </Link>
          <Link href="/sobre">
            <p className="text-gray-500 hover:border-black/20 p-1 rounded-md bg-gray-100 border duration-150 hover:text-black ">Sobre nós</p>
          </Link>
        </div>
        {/* Ícone responsivo para menu mobile com clique */}
        <div className="md:hidden">
          <FiMenu
            className="text-2xl text-gray-500 hover:border-black/20 cursor-pointer duration-150 active:text-black"
            onClick={toggleMobileMenu}
          />
        </div>
      </div>
      {/* Menu móvel com animações */}
      <motion.div
        initial="hidden"
        animate={isMobileMenuOpen ? 'visible' : 'hidden'}
        variants={menuVariants}
        className={`sm:hidden z-50 justify-around flex flex-row gap-2 text-center sm:mx-8 ${isMobileMenuOpen ? '' : 'bg-opacity-0'} `}
      >
        <Link href="/informe">
          <p className="mt-2 text-gray-500 hover:border-black/20 bg-gray-100 hover:text-black duration-150 p-1 rounded-md border w-fit">Informe-se</p>
        </Link>
        <Link href="/localize">
          <p className="mt-2 text-gray-500 hover:border-black/20 bg-gray-100 hover:text-black duration-150 p-1 rounded-md border w-fit">Localize-se</p>
        </Link>
        <Link href="/sobre">
          <p className="mt-2 text-gray-500 hover:border-black/20 bg-gray-100 hover:text-black duration-150 p-1 rounded-md border w-fit">Sobre nós</p>
        </Link>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;