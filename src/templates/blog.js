// create and export a react component that will be the template
// for all blog pages. this is to auto generate blog pages from MD files

import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

/**
 *Create separate graphql query to pass in slug param
 * Specify export up front bc we want this as a named export.
 * Gatsby is going to take this query and run it automatically
 * using the context's slug as query parameter.
 * Then, it will provide the query's result as a "prop" to the Blog
 * component below.
 */
export const query = graphql`
    query ($slug: String!) {
        markdownRemark(
            fields : {
                slug:{
                    eq: $slug
                }
            }
        ) {
            frontmatter {
                title
                date
            }
            html
        }
    }
`

const Blog = (props) => {
    const slug = props.slug
    
    return (
        <Layout>
            This is the blog template
        </Layout>

    )
}

export default Blog
