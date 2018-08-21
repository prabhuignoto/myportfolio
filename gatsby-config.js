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
      head: true,
    },
  },
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-sass',
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  'gatsby-plugin-offline',
  'gatsby-plugin-manifest',
  'gatsby-plugin-netlify-cache',
  ],
};
