import React, { Component } from 'react';
//import { Route, withRouter } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
//import Home from './Home';
//import Login from './Login';
//import React from 'react';
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
//import { Security } from '@okta/okta-react';
import { useHistory } from 'react-router-dom';

import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import PeopleNearMe from "./components/PeopleNearMe/PeopleNearMe";
import SignUpLoginWithWidget from "./components/SignUpLogin/SignUpLoginWithWidget";
import CreateAccount from "./components/AccountCreation/CreateAccount";
import Profile from "./components/Profile/Profile";
import './App.css';


import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default withRouter(class AppWithRouterAccess extends Component {
  constructor(props) {
    super(props);
    this.onAuthRequired = this.onAuthRequired.bind(this);
  }

  onAuthRequired() {
    this.props.history.push('/login')
  }

  render() {

    // Note: If your app is configured to use the Implicit Flow 
    // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
    // you will need to add the below property to what is passed to <Security>
    //
    // pkce={false}

    return (
        <Security issuer='https://dev-634748.okta.com/oauth2/default'
                  clientId='0oaylsvqxFCr5OriB4x6'
                  redirectUri={window.location.origin + '/implicit/callback'}
                  onAuthRequired={this.onAuthRequired} >
          <SecureRoute path='/' exact={true} component={Main} />
          <SecureRoute path='/home' component={Home} />
          <Route path="/login" render={() => <SignUpLoginWithWidget baseUrl='https://dev-634748.okta.com' />} />
          <Route path="/createAccount" component={CreateAccount} />
          <Route path='/implicit/callback' component={LoginCallback} />
          <Route path="/profile" component={Profile} />
          <Route path="/peopleNearMe/:id" component={PeopleNearMe} />
        </Security>
    );
  }
});

    