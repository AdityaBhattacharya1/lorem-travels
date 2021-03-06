require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteUrl = `https://lorem-travels.vercel.app`

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
        precachePages: [`/*`],
        workboxConfig: {
          importWorkboxFrom: `cdn`, // default settings of workbox, without making an sw.js file
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `packages`,
        path: `${__dirname}/src/packages/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://lorem-travels.vercel.app",
        policy: [{ userAgent: "*", crawlDelay: 120 }],
      },
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        exclude: [`/404`, `/404.html`, `/offline-plugin-app-shell-fallback`],
        createLinkInHead: true,
        addUncaughtPages: true,
      },
      additionalSitemaps: [
        {
          name: `package-pages`,
          url: `https://lorem-travels.vercel.app/sitemap-pages.xml`,
        },
      ],
    },
  ],
  siteMetadata: {
    title: "Lorem Travels",
    description: "Lorem Travels - A sample travel agency",
    author: "Aditya Bhattacharya",
    siteUrl,
  },
}
