module.exports = {
  siteName: 'inkntint',
  siteUrl: 'https://inkntint.com',
  titleTemplate: 'inkntint - %s',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          content: ['**/*.vue'],
          whiteListPatterns: [/(svg-*|fa-)/g]
        },
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
      }
    }
  ]
}
