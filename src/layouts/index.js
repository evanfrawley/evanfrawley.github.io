import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import {Box} from 'rebass';

import NavLinks from './navLinks'

import '../styles/scss/normalize.scss'
import '../styles/scss/index.scss'
import BoxFullHeight from "../components/BoxFullHeight";

const Header = () => (
  <Box className="header">
    <Box className="headerBar">
      <Box className="headerBarLinkWrapper">
        <Link className="headerBarLink" to="/">
          EF
        </Link>
      </Box>
      <Box className="navLinksWrapper">
        <NavLinks/>
      </Box>
    </Box>
  </Box>
);

const TemplateWrapper = ({children}) => (
  <BoxFullHeight className="rootApp">
    <Helmet
      title="Evan Frawley"
      meta={[
        {name: 'description', content: 'Evan Frawley\'s personal site'},
        {name: 'keywords', content: 'personal, portfolio, evan frawley, engineer, software'},
        {name: "msapplication-TileColor", content: "#ffffff"},
        {name: "msapplication-TileImage", content: "/ms-icon-144x144.png"},
        {name: "theme-color", content: "#ffffff"},
      ]}
    >
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
      <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/manifest.json"/>
      <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
    </Helmet>
    <Header/>
    <BoxFullHeight>
      {children()}
    </BoxFullHeight>
  </BoxFullHeight>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
