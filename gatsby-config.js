/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: 'drinkthestars',
        author: 'Tasha R',
    },
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
              // Footnotes mode (default: true)
              footnotes: true,
              // GitHub Flavored Markdown mode (default: true)
              gfm: true,
            },
          },
    ],
}