module.exports = {
  siteMetadata: {
    title: `swedendry show`,
    author: `swedendry`,
    description: `swedendry`,
    siteUrl: `https://swedendry.github.io/`,
    social: {
      twitter: ``,
    },
    icons: [
      {
        tag: "react",
        path: "Di",
        name: "DiReact",
        color: "deepskyblue",
      },
      {
        tag: "nodejs",
        path: "Di",
        name: "DiNodejsSmall",
        color: "lightgreen",
      },
      {
        tag: "git",
        path: "Di",
        name: "DiGitMerge",
        color: "black",
      },
      {
        tag: "javascript",
        path: "Di",
        name: "DiJsBadge",
        color: "yellow",
      },
      {
        tag: "css",
        path: "Di",
        name: "DiCss3Full",
        color: "teal",
      },
      {
        tag: "python",
        path: "Di",
        name: "DiPython",
        color: "deepskyblue",
      },
      {
        tag: "ruby",
        path: "Di",
        name: "DiRuby",
        color: "crimson",
      },
      {
        tag: "java",
        path: "Fa",
        name: "FaJava",
        color: "wheat",
      },
      {
        tag: "angular",
        path: "Di",
        name: "DiAngularSimple",
        color: "red",
      },
      {
        tag: "html",
        path: "Fa",
        name: "FaHtml5",
        color: "darkorange",
      },
      {
        tag: "php",
        path: "Di",
        name: "DiPhp",
        color: "violet",
      },
      {
        tag: "mongodb",
        path: "Di",
        name: "DiMongodb",
        color: "green",
      },
      {
        tag: "vscode",
        path: "Di",
        name: "DiVisualstudio",
        color: "deepskyblue",
      },
      {
        tag: "github",
        path: "Go",
        name: "GoMarkGithub",
        color: "black",
      },
      {
        tag: "dotnet",
        path: "Di",
        name: "DiDotnet",
        color: "deepskyblue",
      },
      {
        tag: "azure",
        path: "Fa",
        name: "FaCloud",
        color: "deepskyblue",
      },
      {
        tag: "grammar",
        path: "Fa",
        name: "FaBook",
        color: "darkred",
      },
      {
        tag: "db",
        path: "Go",
        name: "GoDatabase",
        color: "dimgray",
      },
      {
        tag: "network",
        path: "Fa",
        name: "FaNetworkWired",
        color: "dimgray",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
