// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'BesTakt',
  siteUrl: 'https://www.bestakt.com',
  siteDescription: 'Business Outsourcing | خدمات إدارية ومالية عن بعد وإستعانة بمصادر خارجية',
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        config: {
          '/about': {
            changefreq: 'monthly',
            priority: 0.7,
            lastmod: '2021-01-01',
          }
        }
      }
    }
  ]
}
