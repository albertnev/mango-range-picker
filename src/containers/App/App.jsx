import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../Home';
import { Menu } from '../Menu';

const App = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
};

export default App;
