import React from "react"
// This is a named export. Link is React Component from the gatsby npm module
// gatsby module already installed and listed in package.json under "dependencies"
// Link optimizes link loading by preloading content etc
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

// Most of the time need to use StaticImage if you know the name of the file you're going to use
import { StaticImage } from "gatsby-plugin-image"
import { imageWrapper } from "../styles/index.module.css"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hi there</h1>
      <div class={imageWrapper}>
        <StaticImage
          src="../../images/oldlib.webp"
          alt="library"
          placeholder="blurred"
        />
      </div>
      <p align="center">
        Photo by{" "}
        <a href="https://unsplash.com/@ula_kuzma?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Ula Kuźma
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/s/photos/old-library?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>{" "}
      </p>
      <h2>Welcome to the library 📜 🔮 ✨</h2>

      {/* Ok for gatsby sites, for external sides a and href is fine */}
      <p>
        <Link to="/about">Who</Link> am I ?
      </p>
    </Layout>
  )
}

export default IndexPage
