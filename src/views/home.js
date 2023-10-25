import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Traffls-Dashboard</title>
        <meta property="og:title" content="Traffls-Dashboard" />
      </Helmet>
    </div>
  )
}

export default Home
