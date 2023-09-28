// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import SignUp from './Components/SignUp';
import Welcome from './Components/Welcome';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/signup" component={SignUp} />
      <Route path="/welcome" component={Welcome} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
