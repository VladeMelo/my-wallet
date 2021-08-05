import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Main from '../pages/Main'
import Second from '../pages/Second'

const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/second" component={Second} />
        </Switch>
    </BrowserRouter>
  );
  
  export default Routes;