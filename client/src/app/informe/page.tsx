'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, Variants, AnimatePresence } from "framer-motion";

const apiKey = process.env.API_KEY_NEWSAPI;

interface Article {
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
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
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchNews() {
            try {
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${apiKey}`
                );

                setArticles(response.data.articles);
            } catch (error) {
                console.error("Erro ao buscar notícias:", error);
                setError("Erro ao buscar notícias :(");
            } finally {
                setLoading(false);
            }
        }

        fetchNews();
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="sm:px-6 p-0">
            {loading && <Loader />}

            {!loading && !error && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-2xl m-2 font-bold">
                    Notícias sobre Meio Ambiente, Tecnologia e Ciência:
                </motion.div>
            )}
            {error && (
                <div className="h-screen flex justify-center items-center">
                    <p className="text-red-500  p-2 text-center font-mono font-bold animate-bounce text-lg mb-4">
                        {error}
                    </p>
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
                            className="border hover:border-black/20 duration-150 hover:bg-gray-100/10 border-black/10 rounded-lg p-4 shadow-sm hover:shadow-md bg-gray-50"
                        >
                            <h2 className="text-xl font-semibold border-b border-black/10 pb-2">{article.title}</h2>
                            {article.urlToImage && (
                                <img
                                    src={article.urlToImage}
                                    alt={article.title}
                                    className="w-full h-48 object-cover object-center mt-4 mb-4 rounded-lg"
                                />
                            )}
                            <p className="text-gray-700  line-clamp-3 text-justify">{article.description}</p>
                            <a
                                href={article.url}
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
