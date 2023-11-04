'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Image from "next/image";

const apiKey = process.env.API_KEY_NEWSAPI;

interface Article {
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
}

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};


function NewsPage() {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        async function fetchNews() {
            try {
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${apiKey}`
                );

                setArticles(response.data.articles);
            } catch (error) {
                console.error("Erro ao buscar notícias:", error);
            }
        }

        fetchNews();
    }, []);

    return (
        <div className="sm:px-6 p-0">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-2xl m-2 font-bold">
                Notícias sobre Meio Ambiente, Tecnologia e Ciência:
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 p-4">
                <AnimatePresence>
                    {articles.map((article, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: .5, delay: index * 0.2 }}
                            className="border hover:border-black/20 duration-150 hover:bg-gray-100/10 border-black/10 rounded-lg p-4 shadow-sm hover:shadow-md bg-zinc-100"
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
                                Leia mais
                            </a>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default NewsPage;
