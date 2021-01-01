// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'BesTakt',
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: [],
        config: {
          '/services/*': {
            changefreq: 'monthly',
            priority: 0.5,
            lastmod: '2021-01-01',
          },
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
