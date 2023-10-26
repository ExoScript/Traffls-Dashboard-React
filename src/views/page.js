import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Traffls-Dashboard</title>
        <meta property="og:title" content="Page - Traffls-Dashboard" />
      </Helmet>
      <Link to="/" className="page-navlink">
        Text
      </Link>
    </div>
  )
}

export default Page
