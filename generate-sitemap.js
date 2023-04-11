const fs = require("fs");
const fetch = require("node-fetch");

const DOMAIN = "https://www.initiosolutions.com";
const API_URL = `${process.env.URL}/api/blog`;

const getSitemapData = async () => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching sitemap data:", error);
    return [];
  }
};

const generateSitemap = async () => {
  const data = await getSitemapData();
  const currentDate = new Date().toISOString();

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add static pages
  sitemap += `
  <url>
    <loc>${DOMAIN}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Add more static pages here -->`;

  // Add dynamic blog pages
  data.forEach((post) => {
    sitemap += `
  <url>
    <loc>${DOMAIN}/blog/${post._id}</loc>
    <lastmod>${post.updatedAt || post.createdAt}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);
  console.log("Sitemap generated!");
};

generateSitemap();
