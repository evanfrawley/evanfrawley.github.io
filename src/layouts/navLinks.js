import React from 'react';
import Link from 'gatsby-link';

const PAGES_AND_PATHS = [
  {
    urlPath: "/about/",
    linkHandle: "About Me"
  },
  {
    urlPath: "/stuff-i-do/",
    linkHandle: "Stuff I Do"
  },
  {
    urlPath: "/thoughts-on-stuff/",
    linkHandle: "Thoughts on Stuff"
  },
  {
    urlPath: "/resume/",
    linkHandle: "Resume"
  },
]

const navLinkItems = PAGES_AND_PATHS.map((item) => {
  return(
    <div className="navLinkContainer" key={ item.urlPath }>
      <Link className="navLink" to={ item.urlPath }>{ item.linkHandle }</Link>
    </div>
  )
})

const NavLinks = () => (
  <div className="navLinks">
    { navLinkItems }
  </div>
)

export default NavLinks;
