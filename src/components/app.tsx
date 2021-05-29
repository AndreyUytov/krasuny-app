import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import routes from './../routes'
import store from './../store'

export default function App (): React.ReactElement {
  return (
    <>
     <Provider store={store}>
        <Router basename="/krasuny-app">
            {routes}
        </Router>
      </Provider> 
    </>
  )
}