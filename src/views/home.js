import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Central Operations Analyst</title>
        <meta property="og:title" content="Central Operations Analyst" />
      </Helmet>
    </div>
  )
}

export default Home
