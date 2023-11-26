'use client'
import Navbar from '@/components/navbar/navbar';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const App: React.FC = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: .5, ease: 'easeOut' }, // Ajuste a duração e o tipo de animação aqui
    },
  };

  return (
    <div>

      <main className="pb-4">
        {/*lampada */}
        <section className="container mx-auto py-10 flex justify-around flex-wrap">
          <motion.div
            className="w-full md:w-1/2 p-4"
            variants={fadeIn}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            ref={ref1}
          >
            <h1 className="text-4xl font-bold mb-4">
              Por um futuro melhor,<br />o primeiro passo é hoje.
            </h1>
            <p className="text-lg mb-4">
              Um site para você encontrar onde descartar devidamente o
              eletroeletrônico.
            </p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/3 p-4"
            variants={fadeIn}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            ref={ref1}
          >
            <img
              src="https://cdn.pixabay.com/photo/2020/09/21/23/27/leaves-5591442_1280.jpg"
              alt="Imagem de uma lâmpada"
              className="w-full h-auto rounded-md"
            />
          </motion.div>
          <motion.div
            className="w-full p-4"
            variants={fadeIn}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            ref={ref1}
          >
            <h5 className="text-center border-t border-b py-3">
              O site Eteco é uma iniciativa para conscientizar a população de
              Leme-SP para a importância do descarte ambiental correto, a
              reciclagem de aparelhos eletroeletrônicos e orientar sobre como e
              onde deve ser efetuado o devido descarte destes materiais.
            </h5>
          </motion.div>
        </section>

        {/*texto */}
        {/* Container Flex para os Cards */}
        <div className="container mx-auto pb-10 pt-2 flex justify-around flex-wrap ">

          {/* Seção de Notícias */}
          <motion.div
            className="w-full md:w-1/2 p-4"
            variants={fadeIn}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            ref={ref2}
          >
            <div className="bg-gray-50/50 hover:bg-white p-6 rounded-xl shadow-md duration-300 hover:shadow-xl border h-full">
              <h2 className="text-3xl font-bold mb-4">
                Fique Atualizado com as Últimas Notícias
              </h2>
              <p className="text-lg mb-4">
                Acompanhe as notícias mais recentes sobre <b className='font-semibold'>sustentabilidade,  ciência, tecnologia, reciclagem e meio ambiente</b>. Mantenha-se informado para contribuir ativamente para um ambiente mais saudável.
              </p>
              <div className="flex justify-center items-center">
                <a href="/informe" className='inline-block p-4 rounded-lg border bg-green-500 text-white hover:bg-green-700 transition-all duration-300 focus:outline-none focus:ring focus:border-green-300'>
                  Ir para as notícias
                </a>
              </div>
            </div>
          </motion.div>

          {/* Seção de Localização (Mapa) */}
          <motion.div
            className="w-full md:w-1/2 p-4"
            variants={fadeIn}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            ref={ref2}
          >
            <div className="bg-gray-50/50 hover:bg-white p-6 rounded-xl shadow-md duration-300 hover:shadow-xl border h-full">
              <h2 className="text-3xl font-bold mb-4">
                Encontre Ecopontos em Sua Região
              </h2>
              <p className="text-lg mb-4">
                Utilize nosso <b className='font-semibold'>mapa interativo</b> para localizar os ecopontos mais próximos de você. Facilitamos o processo de descarte ambiental correto, ajudando você a contribuir para um futuro mais sustentável.
              </p>
              <div className="flex justify-center items-center">
                <a href="/localize" className='inline-block p-4 rounded-lg border bg-green-500 text-white hover:bg-green-700 transition-all duration-300 focus:outline-none focus:ring focus:border-green-300'>
                  Ir para o mapa
                </a>
              </div>
            </div>
          </motion.div>

        </div>

      </main>
    </div >
  );
};

export default App;
