import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const NotFound = () => {
    return (
        <Layout>
            <h4>uh oh, that doesn't exist :(</h4>
            <p><Link to="/">Go home</Link></p>
        </Layout>
    )
}

export default NotFound