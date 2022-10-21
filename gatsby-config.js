module.exports = {
  siteMetadata: {
    title: `Leone Bacciu`,
    description: `Leone Bacciu personal website`,
    author: `@LeoneBacciu`,
    siteUrl: `https://leonebacciu.github.io/`,
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        serialize: ({ path }) => ({
          url: path,
          lastmod: new Date().getTime(),
        }),
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-N3X2BTSQ11"],
        pluginConfig: {
          head: true,
        },
      },
    },
    `gatsby-plugin-well-known`,
    `gatsby-plugin-no-sourcemaps`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-yaml`,
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
        name: `projects`,
        path: `${__dirname}/src/data/projects`,
      },
    },
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        prettier: true,
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: "preset-default",
              params: {
                overrides: {
                  removeViewBox: false,
                },
              },
            },
          ],
        },
      },
    },

    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Leone Bacciu`,
        short_name: `Leone Bacciu`,
        start_url: `/`,
        background_color: `#212121`,
        theme_color: `#f55600`,
        display: `minimal-ui`,
        icon: `src/images/laptop_icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
