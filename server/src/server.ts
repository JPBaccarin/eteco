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

async function extractAllNews(baseUrl: string, totalPages: number): Promise<News[]> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const allNews: News[] = [];

  for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
    const url = `${baseUrl}/${currentPage === 1 ? '' : currentPage}`;

    await page.goto(url);

    const newsList = await page.$$eval('.box-noticia', (newsElements) => {
      return newsElements.map((newsElement) => {
        const titleElement = newsElement.querySelector('h4');
        const descriptionElement = newsElement.querySelector('.box-noticia__texto-container');
        const imageElement = newsElement.querySelector('.box-noticia__imagem');
        const categoryElements = newsElement.querySelectorAll('.img-label');
        const linkElement = newsElement.querySelector('a');

        const title = titleElement?.textContent?.trim() || '';
        const descriptionRaw = descriptionElement?.textContent?.trim() || '';

        const categories = Array.from(categoryElements).map((categoryElement) => categoryElement.textContent?.trim() || '');

        const dateMatch = descriptionRaw.match(/\d{1,2}\s+de\s+[a-zA-Z]+\s+de\s+\d{4}/);
        const date = dateMatch ? dateMatch[0] : '';

        const description = descriptionRaw
          .replace(date, '')
          .replace('Ler mais', '')
          .replace(categoryElements?.[0]?.textContent?.trim() || '', '')
          .replace(/\s+/g, ' ')
          .trim();

        const imageUrl = imageElement?.getAttribute('data-src') || '';
        const link = linkElement?.getAttribute('href') || '';

        return { title, description, date, imageUrl, categories, link };
      });
    });

    allNews.push(...newsList);
  }

  // Remover notícias duplicadas
  const uniqueNews = Array.from(new Set(allNews.map((news) => JSON.stringify(news))))
    .map((json) => JSON.parse(json));

  await browser.close();

  return uniqueNews;
}

(async () => {
  const baseUrl = 'https://www.leme.sp.gov.br/noticias/categoria/meio-ambiente';
  const totalPages = 2;

  const allNews = await extractAllNews(baseUrl, totalPages);

  // Salvar os dados em um arquivo JSON
  fs.writeFileSync('news_data.json', JSON.stringify(allNews, null, 2));
  console.log(allNews)
  console.log('Dados extraídos e salvos em news_data.json');
})();
