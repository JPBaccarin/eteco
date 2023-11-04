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

      <main className="bg-gray-100">
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
        <section className=" mx-auto text-justify ">
          <motion.div
            className="w-full p-4 "
            variants={fadeIn}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            ref={ref2}
          >
            <h2 className="text-3xl font-bold mb-4 underline decoration-dashed decoration-auto underline-offset-4"> Por um mundo melhor é preciso de todos </h2>
            <img
              src="https://i.pinimg.com/originals/d5/9f/0f/d59f0fc4f0e5a14e76a4b91cb409b988.jpg"
              alt="Imagem do planeta Terra"
              className=" w-full sm:w-1/2 sm:float-left sm:mb-8 sm:mr-8 rounded-md"
            />.

            <h2 className="text-2xl font-bold mb-4">O que é lixo eletrônico?</h2>

            <p>Lixo eletrônico, também conhecido como resíduo eletrônico ou e-lixo, refere-se a todos os dispositivos eletrônicos descartados, não funcionais ou obsoletos. Isso abrange uma ampla variedade de produtos eletrônicos, desde telefones celulares e laptops até aparelhos domésticos, como geladeiras e máquinas de lavar. Com o rápido avanço da tecnologia, o ciclo de vida dos dispositivos eletrônicos está se tornando mais curto, levando a um aumento constante na quantidade de lixo eletrônico.</p>

            <h3 className="text-xl font-bold mt-4">Principais tipos de lixo eletrônico incluem:</h3>
            <ul className="list-disc list-inside pl-6">
              <li>Computadores e laptops antigos</li>
              <li>Celulares e smartphones quebrados ou desatualizados</li>
              <li>Tablets e dispositivos similares</li>
              <li>Televisões antigas e monitores</li>
              <li>Periféricos de computador, como teclados e mouses</li>
              <li>Eletrodomésticos, como geladeiras, máquinas de lavar e micro-ondas</li>
              <li>Baterias recarregáveis</li>
              <li>Equipamentos de escritório, como impressoras e scanners</li>
            </ul>

            <h3 className="text-xl font-bold mt-4">Impactos do lixo eletrônico:</h3>
            <p className="text-lg mb-4">
              O descarte inadequado de lixo eletrônico pode ter sérios impactos ambientais e de saúde. Muitos dispositivos eletrônicos contêm substâncias tóxicas, como mercúrio, chumbo, cádmio e materiais inflamáveis, que podem contaminar o solo e a água se forem descartados de maneira inadequada. Além disso, a reciclagem inadequada de eletrônicos desperdiça recursos valiosos e contribui para o esgotamento de recursos naturais.

              Além dos impactos ambientais, o lixo eletrônico pode representar um risco para a saúde humana devido à exposição a produtos químicos tóxicos. Trabalhadores que lidam com o descarte de eletrônicos sem proteção adequada estão sujeitos a problemas de saúde, como intoxicação por chumbo e problemas respiratórios.

              A reciclagem apropriada e o descarte responsável de lixo eletrônico são essenciais para mitigar esses impactos negativos e promover a sustentabilidade.
            </p>

            <h3 className="text-xl font-bold mt-4">Como descartar lixo eletrônico corretamente:</h3>
            <p className="text-lg mb-4">
              Para descartar lixo eletrônico de forma responsável, siga estas diretrizes:

              <ul className="list-disc list-inside pl-6">
                <li>Procure pontos de coleta de reciclagem eletrônica em sua região. Muitas cidades e empresas oferecem programas de reciclagem de eletrônicos onde você pode entregar seus dispositivos antigos.</li>
                <li>Certifique-se de apagar todos os dados pessoais antes de descartar qualquer dispositivo. Faça cópias de segurança de informações importantes e, em seguida, restaure as configurações de fábrica ou formate os dispositivos.</li>
                <li>Evite jogar eletrônicos no lixo comum, onde podem acabar em aterros sanitários e contaminar o meio ambiente. Em vez disso, opte pela reciclagem apropriada.</li>
                <li>Considere a doação de dispositivos eletrônicos ainda funcionais para instituições de caridade ou escolas, promovendo a reutilização em vez do descarte.</li>
              </ul>

              A conscientização sobre os impactos do lixo eletrônico e a adoção de práticas responsáveis de descarte são fundamentais para proteger o meio ambiente, preservar os recursos naturais e garantir um futuro mais sustentável.
            </p>
          </motion.div>
        </section>
      </main>
    </div >
  );
};

export default App;
