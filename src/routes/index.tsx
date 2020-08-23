import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';
import Authentication from '../pages/Authentication';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Authentication} />
    <Route path="/repository/:id" component={Repository} />
    <Route path="/dashboard" component={Authentication} />
  </Switch>
);

export default Routes;
