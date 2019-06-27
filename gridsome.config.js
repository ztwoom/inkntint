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
          content: ['**/*.js', '**/*.vue'],
          whiteList: ['svg-inline--fa', 'fa-check-circle', 'fa-w-16']
        },
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
      }
    }
  ]
}
