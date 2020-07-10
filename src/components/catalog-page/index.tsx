import React from 'react'
import {connect, ConnectedProps} from 'react-redux'

import MainNav from './../main-nav/'
import FilterCatalogPage from './filter'
import { RootState } from '../../reducers'
import { PRODUCT_TYPE } from '../../types'

interface ICatalogPage {
  product_type: PRODUCT_TYPE
}

const mapStateToProps = (state: RootState) => ({
  product_type: state.filters.selectedProductType,

})

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type CatalogPageType = PropsFromRedux & ICatalogPage

const CatalogPage:React.FC<CatalogPageType> = (props) => {
  return (
    <main className = "page-main--catalog container">
      <MainNav links = {['Главная']} to = {['/']} {...props} />
      <FilterCatalogPage />
    </main>
  )
}






export default connect (mapStateToProps) (CatalogPage)