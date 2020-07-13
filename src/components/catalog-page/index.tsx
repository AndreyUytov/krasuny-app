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
import { useParams } from 'react-router-dom'

const mapStateToProps = (state: RootState) => {
  let product_type_query = `product_type=${state.filters.selectedProductType}`
  let product_tags_query = state.filters.selectedTags.length ? `&product_tags=${state.filters.selectedTags.join(',')}` : ''
  let query = product_type_query + product_tags_query
  const {itemsId, isFetching, isFailure} = state.itemsByFilters[query] || {itemsId: []}
  return {
    query,
    product_type: state.filters.selectedProductType,
    tags: state.filters.selectedTags,
    itemsIsFetching: isFetching,
    itemsIsFailure: isFailure,
    itemsId,
    allItems: state.allItems,
    page: state.pagination.page
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
  const {product_type, query} = props
 
  

  const items = getAllItems(props.itemsId, props.allItems) 

  return (
    <main className = "page-main--catalog container">
      <MainNav links = {['Главная']} to = {['/']} {...props} />
      <FilterCatalogPage {...props}/>
      <ListItemsSection {...props} items={items} />
      {items.length ? <PaginationBlock {...props} items={items} /> : ''}
      {/* {
        items.length ? <><ListItemsSection {...props} items={items} /><PaginationBlock {...props} items={items} /></> : <div>Страница загружается</div>
      } */}
    </main>
  )
}

export default connector(CatalogPage)