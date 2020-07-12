import React from 'react'
import {connect, ConnectedProps} from 'react-redux'

import MainNav from './../main-nav/'
import FilterCatalogPage from './filter'
import ListItemsSection from './list-items'
import { RootState } from '../../reducers'
import { PRODUCT_TYPE, TAG_LIST, Item } from '../../types'
import {getAllItems} from './../../selectors'
import { fetchItemsIfNeeded, 
         setFilterByTags,
         resetFilterByTags
      } from './../../action'

interface ICatalogPage {
  product_type: PRODUCT_TYPE,
  tags: TAG_LIST[],
  items: Item[],
  page: number,
  fetchItemsIfNeeded: typeof fetchItemsIfNeeded,
  setFilterByTags: typeof setFilterByTags,
  resetFilterByTags: typeof resetFilterByTags
}

const mapStateToProps = (state: RootState) => {
  let product_type_query = `product_type=${state.filters.selectedProductType}`
  let product_tags_query = state.filters.selectedTags ? `&product_tags=${state.filters.selectedTags.join(',')}` : ''
  let query = product_type_query + product_tags_query

  return {
    query,
    product_type: state.filters.selectedProductType,
    tags: state.filters.selectedTags,
    items: getAllItems(state.itemsByFilters[query].itemsId, state.allItems),
    page: state.pagination.page
  }
}

const mapDispatchToProps = {
  fetchItemsIfNeeded,
  resetFilterByTags,
  setFilterByTags
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type CatalogPageType = PropsFromRedux & ICatalogPage

const CatalogPage:React.FC<CatalogPageType> = (props) => {
  return (
    <main className = "page-main--catalog container">
      <MainNav links = {['Главная']} to = {['/']} {...props} />
      <FilterCatalogPage {...props}/>
      <ListItemsSection {...props} />
    </main>
  )
}






export default connect (mapStateToProps) (CatalogPage)