import React from 'react'
import Link from 'gatsby-link'

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

const navLinks = PAGES_AND_PATHS.map((item) => {
  return(
    <div key={ item.urlPath }>
      <Link to={ item.urlPath }>{ item.linkHandle }</Link>
    </div>
  )
})

const IndexPage = () => (
  <div>
    <h1>Developer.</h1>
  </div>
)

export default IndexPage
