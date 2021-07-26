import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const NotFound = () => {
    return (
        <Layout>
            <Head title="404"/>
            <h4>uh oh, that doesn't exist :(</h4>
            <p><Link to="/">Go home</Link></p>
        </Layout>
    )
}

export default NotFound