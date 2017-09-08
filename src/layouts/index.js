import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import NavLinks from './navLinks'

import '../styles/normalize.css'
import '../styles/scss/index.scss'

const Header = () => (
  <div className="header">
    <div className="headerBar">
      <div className="headerBarLinkWrapper">
        <h1>
          {/*logo here perhaps*/}
          <Link className="headerBarLink" to="/">
            EF
          </Link>
        </h1>
      </div>
      <div className="navLinksWrapper">
        <NavLinks />
      </div>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Evan Frawley"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div className="pageBody">
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;
