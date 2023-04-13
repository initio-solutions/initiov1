module.exports = {
  siteUrl: "https://initiosolutions.com", // Replace with your site URL
  generateRobotsTxt: true, // Enable generating robots.txt
  exclude: ["/404"], // Exclude any pages you don't want in the sitemap
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://initiosolutions.com/sitemap.xml", // Add your sitemap URL here
    ],
  },
};
