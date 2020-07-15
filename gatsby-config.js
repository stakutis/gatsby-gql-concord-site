require('dotenv').config();
const queries = require('./src/utils/algolia');

module.exports = {
  siteMetadata: {
    defaultTitle: `Concord Software and Exectutive Consulting!`,
    defaultDescription: `Introducing Concord Software; Services, people, and more!!`,
    siteUrl: `https://nervous-wescoff-365dda.netlify.com`,
    defaultImage: './static/favicon.ico'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `Pages`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_ID,
        head: true
      }
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200
            }
          },
          `gatsby-remark-copy-linked-files`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: process.env.GATSBY_DISQUS_SHORTNAME
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-netlify-identity-widget'
  ]
};
