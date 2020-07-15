import React, { useEffect } from 'react'
import {connect, ConnectedProps} from 'react-redux'

import MainNav from './../main-nav/'
import FilterCatalogPage from './filter'
import ListItemsSection from './list-items'
import PaginationBlock from './pagination'

import { RootState } from '../../reducers'
import {getAllItems} from './../../selectors'
import { fetchItemsIfNeeded, 
         setFilterByTags,
         resetFilterByTags,
         deleteFilterByTags,
         resetCurrentPage,
         setCurrentPage,
         setFilterByProductType
      } from './../../action'

const mapStateToProps = (state: RootState) => {
  let product_type_query = `product_type=${state.filters.selectedProductType}`
  let product_tags_query = state.filters.selectedTags.length ? `&product_tags=${state.filters.selectedTags.join(',')}` : ''
  let query = product_type_query + product_tags_query
  const {itemsId, isFetching, isFailure, err} = state.itemsByFilters[query] || {itemsId: []}
  return {
    query,
    product_type: state.filters.selectedProductType,
    tags: state.filters.selectedTags,
    itemsIsFetching: isFetching,
    itemsIsFailure: isFailure,
    err,
    itemsId,
    allItems: state.allItems,
    page: state.pagination.page,
    selection: state.filters.selectedSelection
  }
}

const mapDispatchToProps = {
  fetchItemsIfNeeded,
  resetFilterByTags,
  setFilterByTags,
  deleteFilterByTags,
  setCurrentPage,
  resetCurrentPage,
  setFilterByProductType
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type CatalogPageType = PropsFromRedux

const CatalogPage:React.FC<CatalogPageType> = (props) => {
  let defaultItems = getAllItems(props.itemsId, props.allItems)
  // let items = defaultItems.map((elem) => {
  //   if (elem.rating === null) {
  //    elem.rating = 0
  //   }
  //   return elem
  // })
  // useEffect(() => {
  //   if (props.selection === 'rating') {
  //     items.sort( (a, b) => a.rating - b.rating)
  //   }
  // })
  return (
    <main className = "page-main--catalog container">
      <MainNav links = {['Главная']} to = {['/']} {...props} />
      <FilterCatalogPage {...props}/>
      <ListItemsSection {...props} items={defaultItems} />
      {defaultItems.length ? <PaginationBlock {...props} items={defaultItems} /> : ''}
    </main>
  )
}

export default connector(CatalogPage)