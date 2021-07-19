const path = require('path')


// intercept when the graphql nodes are created, find the right type, and then artificially
// create a new field called slug, so that we can query it using graphql
module.exports.onCreateNode = ({ node, actions }) => {
    const { createNode, createNodeField } = actions
    // Transform the new node here and create a new node or
    // create a new node field.
    if (node.internal.type == 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, ".md")

        // creates a new field in the node (like a new json field)
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}


// now auto create pages based on the md files
module.exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions
    
    // 1. get path to template
    const blogTemplate = path.resolve('./src/templates/blog.js')

    // 2. get md data
    // returns a promise
    const slugResponse = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }    
    `)

    // 3. create new pages
    slugResponse.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
            component: blogTemplate, // not actual component, just it's path
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })

    slugResponse.data.allContentfulBlogPost.edges.forEach(edge => {
        createPage({
            component: blogTemplate, // not actual component, just it's path
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}
