// Importa os estilos do Tailwind CSS
'use client'
import React, { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import newsData from "./news_data.json"; // Atualize o caminho conforme necessário

interface Article {
    title: string;
    description: string;
    date: string;
    imageUrl: string | null;
    categories: string[];
    link: string;
}

const loaderVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        },
    },
};

// Função para obter a cor de acordo com a categoria
function getCategoryColor(category: string): string {
    switch (category) {
        case "MEIO AMBIENTE":
            return "bg-green-500";
        // Adicione mais casos para outras categorias, se necessário
        default:
            return "bg-gray-500";
    }
}

function Loader() {
    return (
        <motion.div
            className="flex items-center justify-center h-screen"
            variants={loaderVariants}
            initial="hidden"
            animate="visible"
        >
            <p className="text-2xl italic font-semibold animate-pulse">Carregando...</p>
        </motion.div>
    );
}

function NewsPage() {
    const [articles, setArticles] = useState<Article[]>(newsData); // Alterado para usar o JSON importado
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Não é mais necessário o fetch aqui

        // Você pode adicionar lógica de carregamento adicional se necessário

        setLoading(false);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="sm:px-6 p-0">
            {loading && <Loader />}

            {!loading && !error && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-2xl m-2 font-bold">
                    Notícias sobre Meio Ambiente de Leme:
                </motion.div>
            )}
            {error && (
                <div className="h-screen flex justify-center items-center flex-col">
                    <p className="text-red-500  p-2 text-center font-mono font-bold animate-bounce text-lg mb-4">
                        {error}
                    </p>
                    <div className="text-center">
                        <sub className="font-mono">Enquanto arrumamos o problema, acesse as notícias diretamente no site da <a target="blank" href="https://www.leme.sp.gov.br/noticias/categoria/meio-ambiente" className="text-blue-500 font-bold hover:underline"> prefeitura</a>.</sub>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 p-4">
                <AnimatePresence>
                    {articles.map((article, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: .5, delay: index * 0.2 }}
                            className="first-letter:relative border hover:border-black/20 duration-150 hover:bg-gray-100/10 border-black/10 rounded-lg p-4 shadow-sm hover:shadow-md bg-gray-50"
                        >
                            <h2 className="text-xl font-semibold border-b border-black/10 pb-2">{article.title}</h2>
                            {article.imageUrl && (
                                <div className="relative">
                                    <img
                                        src={article.imageUrl}
                                        alt={article.title}
                                        className="w-full h-48 object-cover object-center mt-4 mb-4 rounded-lg"
                                    />
                                    <div className={`absolute top-0 right-0 p-2 border border-black/10 rounded-br-none  rounded-lg ${getCategoryColor(article.categories[0])} text-white text-xs font-bold `}>
                                        {article.categories[0]}
                                    </div>
                                </div>
                            )}
                            <p className="text-gray-700  line-clamp-2 text-justify">{article.description}</p>
                            <div className="flex mt-2">

                            </div>
                            <a
                                href={article.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline block mt-2 transition-all duration-150"
                            >
                                Ler mais
                            </a>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}


export default NewsPage;
