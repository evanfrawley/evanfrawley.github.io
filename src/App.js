import React from 'react';
import Section from './Section';
import PageHeader from './PageHeader';
import './App.css';
import {getSiteContent} from './SiteController';
import firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
injectTapEventPlugin();

class App extends React.Component {

  state = {
    siteContent: {
      experience: [],
      projects: [],
      contactMe: []
    },
    headerContent: {}
  };

  componentDidMount() {
    firebase.auth().signInAnonymously();

    getSiteContent().then((sections) => {
      if(sections) {
          this.setState({siteContent: sections, headerContent: sections.header})
        }
      }
    );
  }

  componentWillUnmount() {
    firebase.database().ref("sections").off();
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="App">
          <PageHeader content={this.state.headerContent}/>
          <Section content={this.state.siteContent.experience} />
          <Section content={this.state.siteContent.projects} />
          <Section content={this.state.siteContent.contactMe} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
