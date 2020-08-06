import React from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'

import Header from './../components/header'
import Footer from './../components/footer'
import CatalogPage from './../components/catalog-page'
import Card from './../components/card-page'
import FavoritePage from './../components/favorite-page'
import IndexPage from './../components/index-page'

const Layout: React.FC = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default (
  <Switch>
    <Route exact path = '/'>
      <Layout>
        <IndexPage />
      </Layout>
    </Route>
    <Route path = '/poll'>
      <Layout>
        Страница подбора товаров
      </Layout>
    </Route>
    <Route path = '/catalog/:product_type'>
      <Layout>
        <CatalogPage />
      </Layout>
    </Route>
    <Route path= '/lk'>
      <Layout>
        <Route path = '/lk/favorite'>
          <FavoritePage />
        </Route>
      </Layout>
    </Route>
    <Route path = '/:product_type/:product_id'>
      <Layout>
        <Card />
      </Layout>
    </Route>    
  </Switch>
)