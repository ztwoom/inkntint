module.exports = {
  siteName: 'inkntint',
  siteUrl: 'https://inkntint.com',
  titleTemplate: 'inkntint - %s',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
      }
    }
  ]
}
