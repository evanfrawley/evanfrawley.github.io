/**
 * Created by Evan on 12/20/2016.
 */
import React from "react";

class PageHeader extends React.Component {

  render() {
    var content = <div>test</div>;
    if (this.props.content.hasOwnProperty("greeting")) {
      content =
        <div>
          <span>{this.props.content.greeting}</span>
          <span>{this.props.content.tagline}</span>
          <div>
            <img src={this.props.content.image}/>
          </div>
        </div>;
    }
    return (content)
  }

}

export default PageHeader;