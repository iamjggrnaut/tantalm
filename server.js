// server.js
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

// Обслуживаем статические файлы из папки build (или dist, если используете другую систему сборки)
app.use(express.static(path.resolve(__dirname, 'build')));  // или 'dist'

// Маршрут для sitemap.xml
app.get('/sitemap.xml', (req, res) => {
  // 1. Генерируем XML динамически (пример ниже)
  const sitemap = generateSitemap();

  // 2. Отправляем XML-ответ
  res.header('Content-Type', 'application/xml');
  res.send(sitemap);
});

// Все остальные запросы перенаправляем на index.html (для react-router-dom)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));  // или 'dist'
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Функция для генерации Sitemap XML
function generateSitemap() {
  const baseUrl = 'https://tantalm.ru';
  const pages = [
    { loc: '/', lastmod: '2023-11-17', changefreq: 'daily', priority: '1.0' },
    { loc: '/about', lastmod: '2023-11-17', changefreq: 'weekly', priority: '0.8' },
    { loc: '/service', lastmod: '2023-11-17', changefreq: 'weekly', priority: '0.8' },
    { loc: '/products', lastmod: '2023-11-17', changefreq: 'weekly', priority: '0.8' },
    { loc: '/contact', lastmod: '2023-11-17', changefreq: 'monthly', priority: '0.5' },
  ];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  pages.forEach(page => {
    sitemap += `
      <url>
        <loc>${baseUrl}${page.loc}</loc>
        <lastmod>${page.lastmod}T10:00:00+00:00</lastmod>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
      </url>`;
  });

  sitemap += `</urlset>`;
  return sitemap;
}