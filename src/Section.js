/**
 * Created by Evan on 12/18/2016.
 */
import React, { Component } from 'react';
import {Card, CardHeader, CardMedia, CardActions, CardTitle, CardText, FlatButton} from 'material-ui';


// General Section for Project and Experience
class Section extends React.Component {

  render() {
    var items = <div></div>;
    if(this.props.content) {
      items = [];
      console.log(this.props.content.items);
      for(var item in this.props.content.items){
        if(this.props.content.items.hasOwnProperty(item)) {
          item = this.props.content.items[item];
          if(item["name"] !== "header") {
            items.push(<SectionItem key={item["name"]} item={item}/>);
          }
        }
      }
    }
    return(
      <div className="row">
        {items}
      </div>
    );
  }
}

class SectionItem extends React.Component {

  render() {
    return(
      <div className="col l4">
        <Card>
          <CardMedia
            overlay={<CardTitle title={this.props.item.name} subtitle="Subtitle" />}
          >
            <img src={this.props.item.image} />
          </CardMedia>
          <CardText>
            {this.props.item.description}
          </CardText>
          <CardActions>
            <FlatButton label="Go now!" />
          </CardActions>
        </Card>
      </div>
    );
  }
}

// Section and Item for Skills
class SkillsSection extends Section {
  render() {
    return(<div></div>);
  }
}

class SkillsSectionItem extends SectionItem {
  render() {
    return(<div></div>);
  }
}

// Section and Item for ContactMe
class ContactMeSection extends Section {
  render() {
    return(<div></div>);
  }
}

class ContactMeSectionItem extends SectionItem {

  //TODO put in the icons from like github or something
  // Github, spotify, email, contact form, linkedin, snapchat
  render() {
    return(<div></div>);
  }
}

export  default Section;