import React from 'react';
import Link from 'gatsby-link';
import {Box} from "rebass";

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
];

const navLinkItems = PAGES_AND_PATHS.map((item) => {
  return(
    <Box className="navLinkContainer" key={ item.urlPath }>
      <Link className="navLink" to={ item.urlPath }>{ item.linkHandle }</Link>
    </Box>
  )
});

const NavLinks = () => (
  <Box className="navLinks">
    { navLinkItems }
  </Box>
);

export default NavLinks;
