module.exports = {
  /*
  ** Build configuration
  */
  build: {},
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v2' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700' }
    ]
  },
  css: ['~assets/css/style.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070'
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa'
  ],
  plugins: [
    { src: 'plugins/ga.js', ssr: false }
  ]
}

