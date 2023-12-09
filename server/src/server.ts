import puppeteer from 'puppeteer';
import * as fs from 'fs';

interface News {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  categories: string[];
  link: string;
}

async function extractAllNews(url: string, totalPages: number): Promise<News[]> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const allNews: News[] = [];

  for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
    await page.goto(`${url}?page=${currentPage}`);

    const newsList = await page.$$eval('.box-noticia', (newsElements) => {
      return newsElements.map((newsElement) => {
        const titleElement = newsElement.querySelector('h4');
        const descriptionElement = newsElement.querySelector('.box-noticia__texto-container');
        const imageElement = newsElement.querySelector('.box-noticia__imagem');
        const categoryElements = newsElement.querySelectorAll('.img-label'); // Agora seleciona todas as categorias
        const linkElement = newsElement.querySelector('a');

        const title = titleElement?.textContent?.trim() || '';
        const descriptionRaw = descriptionElement?.textContent?.trim() || '';

        // Extrair as categorias
        const categories = Array.from(categoryElements).map((categoryElement) => categoryElement.textContent?.trim() || '');

        // Encontrar a data na descrição
        const dateMatch = descriptionRaw.match(/\d{1,2}\s+de\s+[a-zA-Z]+\s+de\s+\d{4}/);
        const date = dateMatch ? dateMatch[0] : '';

        // Remover categorias, data, "Ler mais" e tags HTML da descrição
        const description = descriptionRaw
          .replace(date, '')
          .replace('Ler mais', '')
          .replace(categoryElements?.[0]?.textContent?.trim() || '', '') // Remover a primeira categoria
          .replace(/\s+/g, ' ') // Remover espaços em branco extras
          .trim();

        const imageUrl = imageElement?.getAttribute('data-src') || '';
        const link = linkElement?.getAttribute('href') || '';

        return { title, description, date, imageUrl, categories, link };
      });
    });

    allNews.push(...newsList);
  }

  await browser.close();

  return allNews;
}

(async () => {
  const url = 'https://www.leme.sp.gov.br/noticias/categoria/meio-ambiente';
  const totalPages = 5; // Defina o número total de páginas que você deseja percorrer

  const allNews = await extractAllNews(url, totalPages);

  // Salvar os dados em um arquivo JSON
  fs.writeFileSync('news_data.json', JSON.stringify(allNews, null, 2));

  console.log('Dados extraídos e salvos em news_data.json');
})();
