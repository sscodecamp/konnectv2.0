//import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import { Security } from '@okta/okta-react';
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWithRouterAccess from './AppWithRouterAccess';


import SignUpLoginWithWidget from "./components/SignUpLogin/SignUpLoginWithWidget";
import CreateAccount from "./components/AccountCreation/CreateAccount";
import Profile from "./components/Profile/Profile";
import './App.css';


import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faEnvelope)

class App extends Component {
  render() {
    return (
      <Router>
        <AppWithRouterAccess/>
      </Router>
    );
  }
}


export default App;
