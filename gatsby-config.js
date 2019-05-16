module.exports = {
  siteMetadata: {
    title: `Chop 'n Chill`,
    description: `Chop 'n Chill Bar & Grill Restaurant is a popular place to visit in Port Macquarie for great food situated on the Hasting River waterfront at Town Green. Enjoy a mix of East meets West cuisine from all over the world. We cater for the whole family including dogs.`,
    email: `info@chopnchill.com.au`, // used in GraphQL queries so address only needs to be entered in one place
    phone: `0265839155`, // e.g. +61400000000
    phoneFormatted: `(02) 6583 9155`, // e.g. 0400 000 000
    siteUrl: `https://www.chopnchill.com.au`, // used for `gatsby-plugin-sitemap` to generate correct URLs
    author: ``, // e.g. @phirannodesigns — used for twitter cards in SEO component
    facebook: `https://www.facebook.com/chopandchill`,
    instagram: `https://www.instagram.com/chopandchill_au`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#171646`,
        theme_color: `#171646`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/tailwind.css`],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
