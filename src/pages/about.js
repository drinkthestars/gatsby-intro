import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>Here's a little about me...</p>
            <p>You can <Link to="/contact">contact me</Link>...</p>
        </Layout>
    )
}

export default AboutPage