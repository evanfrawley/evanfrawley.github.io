import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div className="landingContainer">
    <div className="personalTitle">
      <h1>Developer</h1>
    </div>
    <div className="landingLearnMore">
      <div className="landingButton">
        <a href="/contact">Contact</a>
      </div>
      <div className="landingButton">
        <a href="/resume">Resume</a>
      </div>
    </div>
  </div>
)

export default IndexPage
