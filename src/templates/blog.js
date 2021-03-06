// create and export a react component that will be the template
// for all blog pages. this is to auto generate blog pages from MD files

import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { useContentfulImage } from "../hooks/useContentfulImage"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import Head from "../components/head"
import { MDXRenderer } from "gatsby-plugin-mdx"

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
    mdx(fields: { slug: { name: { eq: $slug } } }) {
      frontmatter {
        title
        date
      }
      body
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      contentful_id
      title
      slug
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
      }
    }
  }
`

const docToReactOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const asset = useContentfulImage(node.data.target.sys.id)
      if (asset) {
        return <img src={asset.node.fluid.src} alt={asset.node.title} />
      }
    },
  },
}

const Blog = props => {
  return (
    <Layout>
      {props.data.mdx !== null && (
        <div>
          <Head title={props.data.mdx.frontmatter.title} />
          <h1>{props.data.mdx.frontmatter.title}</h1>
          <p>{props.data.mdx.frontmatter.date}</p>
          <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
        </div>
      )}
      {props.data.contentfulBlogPost !== null && (
        <div>
          <Head title={props.data.contentfulBlogPost.title} />
          <h1>{props.data.contentfulBlogPost.title}</h1>
          <p>{props.data.contentfulBlogPost.publishedDate}</p>
          {documentToReactComponents(
            JSON.parse(props.data.contentfulBlogPost.body.raw),
            docToReactOptions
          )}
        </div>
      )}
    </Layout>
  )
}

export default Blog
