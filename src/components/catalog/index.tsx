import React from 'react'
import {connect} from 'react-redux'

import MainNav from './../main-nav'

const CatalogMain: React.FC = () => {
  return (
    <main className="page-main--catalog container">
      <MainNav links={['Главная']} activelink={'Каталог'} to={['/']}/>
      CATALOG
    </main>
  )
}

const mapStateToProps = (store:{selectedPage: string}): {} => {
  return {
    activelink: store.selectedPage
  }
}

export default CatalogMain