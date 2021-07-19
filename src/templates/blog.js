// create and export a react component that will be the template
// for all blog pages. this is to auto generate blog pages from MD files

import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'


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
        contentfulBlogPost(slug: { eq: $slug }) {
            contentful_id
            title
            slug
            publishedDate(
                formatString: "MMMM Do, YYYY"
            )
            body {
                raw
            }
        }        
    }
`

const Blog = (props) => {    
    return (
        <Layout>
            {props.data.markdownRemark !== null &&
                <div>
                    <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                    <p>{props.data.markdownRemark.frontmatter.date}</p>
                    <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
                </div>
            }
            {props.data.contentfulBlogPost !== null &&
                <div>
                    <h1>{props.data.contentfulBlogPost.title}</h1>
                    <p>{props.data.contentfulBlogPost.publishedDate}</p>
                    {
                        documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw))
                    }
                </div>
            }
        </Layout>
    )
}

export default Blog
