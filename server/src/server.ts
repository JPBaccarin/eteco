import puppeteer from 'puppeteer';

interface News {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  link: string;
}

async function extractAllNews(url: string): Promise<News[]> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);

  // Aqui você pode adicionar lógica para lidar com a paginação, se necessário.

  const newsList = await page.$$eval('.box-noticia', (newsElements) => {
    return newsElements.map((newsElement) => {
      const titleElement = newsElement.querySelector('h4');
      const descriptionElement = newsElement.querySelector('.box-noticia__texto-container p');
      const imageElement = newsElement.querySelector('.box-noticia__imagem');
      const categoryElement = newsElement.querySelector('.img-label');
      const linkElement = newsElement.querySelector('a');

      const title = titleElement?.textContent?.trim() || '';
      const description = descriptionElement?.textContent?.trim() || '';
      const imageUrl = imageElement?.getAttribute('data-src') || '';
      const category = categoryElement?.textContent?.trim() || '';
      const link = linkElement?.getAttribute('href') || '';

      return { title, description, imageUrl, category, link };
    });
  });

  await browser.close();

  return newsList;
}

(async () => {
  const url = 'https://www.leme.sp.gov.br/noticias/categoria/meio-ambiente';
  const allNews = await extractAllNews(url);

  console.log(allNews);
})();
