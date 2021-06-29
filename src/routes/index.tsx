import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MultiStep from '../pages/StepByStep';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={MultiStep} />
  </Switch>
);

export default Routes;
