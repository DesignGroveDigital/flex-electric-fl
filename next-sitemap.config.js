/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://flexelectricfl.com',
    generateRobotsTxt: true, // generates robots.txt file
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
    exclude: ['/admin/*', '/private/*'], // Add any paths you want to exclude
    robotsTxtOptions: {
      additionalSitemaps: [
        // Add any additional sitemaps if needed
      ],
      policies: [
        { userAgent: '*', allow: '/' },
        { userAgent: '*', disallow: ['/admin', '/private'] }
      ]
    }
  }