module.exports = {
  siteMetadata: {
    title: `Photo Blog`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    // {
    //   resolve: 'gatsby-source-contentful',
    //   options: {
    //     "accessToken": "",
    //     "spaceId": ""
    //   }
    // },
    // "gatsby-plugin-styled-components",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
