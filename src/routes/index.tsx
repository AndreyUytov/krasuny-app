import React from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'

import Home from './../components/home';

export default (
  <Switch>
    <Route exact path = '/'>
      <Home />
    </Route>
  </Switch>
)