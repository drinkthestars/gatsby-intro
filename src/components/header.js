import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import { navitem } from './header.module.scss'
import { activenavitem } from './header.module.scss'
import { header } from './header.module.scss'
import { title } from './header.module.scss'
import { navlist } from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header className={header}>
            <h1>
                <Link to="/" className={title}>{data.site.siteMetadata.title}</Link>
            </h1>
            <nav>
                <ul className={navlist}>
                    <li>
                    <Link className={navitem} activeClassName={activenavitem} to="/">Home</Link>
                    </li>
                    <li>
                    <Link className={navitem} activeClassName={activenavitem} to="/blog">Blog</Link>
                    </li>
                    <li>
                    <Link className={navitem} activeClassName={activenavitem} to="/about">About Me</Link>
                    </li>
                    <li>
                    <Link className={navitem} activeClassName={activenavitem} to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header