module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `styled-components`,
    `babel-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/pricing/`],
        workboxConfig: {
          importWorkboxFrom: `cdn`,
        },
      },
    },
  ],
  siteMetadata: {
    title: "Lorem Travels",
    description: "Lorem Travels - A sample travel agency",
  },
}
