import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import { title } from "../components/blog.module.scss"
import { posts } from "./blog.module.scss"
import { post } from "./blog.module.scss"
import Head from "../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              title
              date
            }
            fields {
              slug {
                name
              }
            }
          }
        }
      }
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            contentful_id
            slug
            title
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={posts}>
        {data.allMdx.edges.map(edge => {
          return (
            <li className={post} key={edge.node.id}>
              <Link to={`/blog/${edge.node.fields.slug.name}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className={post} key={edge.node.contentful_id}>
              <Link to={`/blog/${edge.node.slug.name}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
