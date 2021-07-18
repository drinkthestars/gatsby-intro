import React from 'react'
// This is a named export. Link is React Component from the gatsby npm module
// gatsby module already installed and listed in package.json under "dependencies"
// Link optimizes link loading by preloading content etc
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
            <h1>Hi there</h1>
            <h2>Welcome to the library 📜 🔮 ✨</h2>
            {/* Ok for gatsby sites, for external sides a and href is fine */}
            <p>Who <Link to="/about">am I</Link>?</p>
        </Layout>
    )
}

export default IndexPage
