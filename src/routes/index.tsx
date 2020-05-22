import React from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'

import Home from './../components/home'
import Footer from './../components/footer'
import CatalogMain from './../components/catalog'

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
    <Route path = '/catalog'>
      <Home />
      <CatalogMain />
      <Footer />
    </Route>
    
  </Switch>
)