module.exports = {
  siteMetadata: {
    title: 'Prabhu Murthy - Developer, Designer',
  },
  plugins: [
    {
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
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Prabhu Murthy',
        description: 'Developer, Designer, Architect',
        theme_color: '#747274',
        background_color: '#ffffff',
        display: 'minimal-ui',
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/typography',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    // 'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
};
