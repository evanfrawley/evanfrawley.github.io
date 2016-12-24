import 'normalize-css/normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import firebase from 'firebase';
import 'materialize-css/bin/materialize.css';

//firebase initializing
var config = {
  apiKey: "AIzaSyCku88rt4Y7KiXqx5v4qGzfsFuDsr9T1aE",
  authDomain: "evanfrawleysite.firebaseapp.com",
  databaseURL: "https://evanfrawleysite.firebaseio.com",
  storageBucket: "evanfrawleysite.appspot.com",
  messagingSenderId: "886517326697"
};
firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
