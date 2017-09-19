import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import NavLinks from './navLinks'

import '../styles/scss/normalize.scss'
import '../styles/scss/index.scss'

const Header = () => (
  <div className="header">
    <div className="headerBar">
      <div className="headerBarLinkWrapper">
        <Link className="headerBarLink" to="/">
          EF
        </Link>
      </div>
      <div className="navLinksWrapper">
        <NavLinks />
      </div>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div className="rootApp">
    <Helmet
      title="Evan Frawley"
      meta={[
        { name: 'description', content: 'Evan Frawley\'s personal site' },
        { name: 'keywords', content: 'personal, portfolio, evan frawley, engineer, software' },
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
