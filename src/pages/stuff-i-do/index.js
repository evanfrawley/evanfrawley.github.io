import React from 'react';
import Link from 'gatsby-link';

const STUFF_I_DO_PATH = '/stuff-i-do'
const STUFF_I_DO_ITEMS = [
  {
    urlPath: "/school",
    linkHandle : "School",
  },
  {
    urlPath: "/work",
    linkHandle : "Work",
  },
  {
    urlPath: "/free-time",
    linkHandle : "Free Time",
  },
  {
    urlPath: "/teaching",
    linkHandle : "Teaching",
  },
]

class StuffIDo extends React.Component {
  render() {
    const stuffIDoItemsMappedToJsx = STUFF_I_DO_ITEMS.map((item) => {
      return (
        <div key={item.urlPath}>
          <Link to={`${STUFF_I_DO_PATH}${item.urlPath}`}>{item.linkHandle}</Link>
        </div>
      )
    })
    return(
      <div>
        <p>stuff i do!</p>
        { stuffIDoItemsMappedToJsx }
      </div>
    )
  }
}

export default StuffIDo
