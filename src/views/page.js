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
      <div className="page-container1">
        <div data-thq="thq-dropdown" className="page-thq-dropdown list-item">
          <div data-thq="thq-dropdown-toggle" className="page-dropdown-toggle">
            <span className="page-text">All campaigns</span>
            <div data-thq="thq-dropdown-arrow" className="page-dropdown-arrow">
              <svg viewBox="0 0 1024 1024" className="page-icon">
                <path d="M426 726v-428l214 214z"></path>
              </svg>
            </div>
          </div>
          <ul data-thq="thq-dropdown-list" className="page-dropdown-list">
            <li data-thq="thq-dropdown" className="page-dropdown list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="page-dropdown-toggle1"
              >
                <span className="page-text1">Sub-menu Item</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="page-dropdown1 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="page-dropdown-toggle2"
              >
                <span className="page-text2">Sub-menu Item</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="page-dropdown2 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="page-dropdown-toggle3"
              >
                <span className="page-text3">Sub-menu Item</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Page
