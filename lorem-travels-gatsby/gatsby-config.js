/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

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
  ],
  siteMetadata: {
    title: "Lorem Travels",
    description: "Lorem Travels - A sample travel agency",
  },
}
