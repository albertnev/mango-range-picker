import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Menu } from '../Menu';
import { Home } from '../../pages/Home';
import { Exercise1 } from '../../pages/Exercise1';
import { Exercise2 } from '../../pages/Exercise2';
import '../../styles/app.scss';

const App = () => (
  <>
    <Menu />
    <Switch>
      <Route path="/exercise1" component={Exercise1} />
      <Route path="/exercise2" component={Exercise2} />
      <Route component={Home} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
