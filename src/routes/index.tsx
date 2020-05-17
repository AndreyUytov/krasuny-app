import React from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'

import Home from './../components/home';
import Footer from './../components/footer'

export default (
  <Switch>
    <Route exact path = '/'>
      <Home />
      <Footer />
    </Route>
    <Route path = '/poll'>
      <Home />
      <Footer />
    </Route>
  </Switch>
)