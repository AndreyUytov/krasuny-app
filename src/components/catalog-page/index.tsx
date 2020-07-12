import React, { useEffect } from 'react'
import {connect, ConnectedProps} from 'react-redux'

import MainNav from './../main-nav/'
import FilterCatalogPage from './filter'
import ListItemsSection from './list-items'
import PaginationBlock from './pagination'

import { RootState } from '../../reducers'
import { PRODUCT_TYPE, TAG_LIST, Item } from '../../types'
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

interface ICatalogPage {
  product_type: PRODUCT_TYPE,
  tags: TAG_LIST[],
  page: number,
  fetchItemsIfNeeded: typeof fetchItemsIfNeeded,
  setFilterByTags: typeof setFilterByTags,
  resetFilterByTags: typeof resetFilterByTags,
  deleteFilterByTags: typeof deleteFilterByTags,
  resetCurrentPage: typeof resetCurrentPage,
  setCurrentPage: typeof setCurrentPage,
  setFilterByProductType: typeof setFilterByProductType
}

const mapStateToProps = (state: RootState) => {
  let product_type_query = `product_type=${state.filters.selectedProductType}`
  let product_tags_query = state.filters.selectedTags.length ? `&product_tags=${state.filters.selectedTags.join(',')}` : ''
  let query = product_type_query + product_tags_query
  const {itemsId, isFetching, isFailure} = state.itemsByFilters[query] || {itemsId: [], isFetching: true}
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

type CatalogPageType = PropsFromRedux & ICatalogPage

const CatalogPage:React.FC<CatalogPageType> = (props) => {
  const {product_type} = useParams()
  const items = getAllItems(props.itemsId, props.allItems)

  useEffect (() => {
    if(props.product_type !== product_type) {
      setFilterByProductType(product_type)
      fetchItemsIfNeeded(props.query)
    }
  }, [product_type, props.product_type, props.query])

  return (
    <main className = "page-main--catalog container">
      <MainNav links = {['Главная']} to = {['/']} {...props} />
      <FilterCatalogPage {...props}/>
      {
        items.length ? (<><ListItemsSection {...props} items={items} /><PaginationBlock {...props} items={items} /></>) : <div>Страница загружается</div>
      }
    </main>
  )
}

export default connector(CatalogPage)