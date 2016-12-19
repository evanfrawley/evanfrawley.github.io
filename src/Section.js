/**
 * Created by Evan on 12/18/2016.
 */
import React, { Component } from 'react';

class Section extends React.Component {

  state = {
    items: ["test 1", "test 2", "test 3"]
  };

  render() {

    var items = this.state.items.map(function(item) {
      return <SectionItem key={item} text={item}/>
    });

    return(
      <div>
        {items}
      </div>
    );
  }
}

class SectionItem extends React.Component {

  render() {
    return(
      <div>{this.props.text}</div>
    );
  }
}