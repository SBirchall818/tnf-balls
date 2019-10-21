import React from 'react';
import '../normalize.css';
import '../app.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { UsersScreen, BallsScreen, ConfigScreen } from '../containers';


const App = () => (
  <Router>
    <Switch>
      <Route
        exact
        path="/"
        component={UsersScreen}
      />
      <Route
        path="/config"
        component={ConfigScreen}
      />
      <Route
        path="/balls"
        component={BallsScreen}
      />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  </Router>
);


export default App;
