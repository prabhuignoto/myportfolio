module.exports = {
  siteMetadata: {
    title: 'Prabhu Murthy - Developer, Designer',
  },
  plugins: [{
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'assets',
      path: `${__dirname}/src/assets/`,
    },
  },
  {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: 'UA-34193630-5',
      head: false,
    },
  },
  {
    resolve: 'gatsby-plugin-nprogress',
    options: {
      color: 'tomato',
      showSpinner: true,
    },
  },
  {
    resolve: 'gatsby-plugin-web-font-loader',
    options: {
      google: {
        families: ['Raleway:400,500'],
      },
    },
  },
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-sass',
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  'gatsby-plugin-offline',
  // 'gatsby-plugin-manifest',
  ],
};
