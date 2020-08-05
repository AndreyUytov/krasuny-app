import React, { useEffect, useState } from 'react'
import {connect, ConnectedProps} from 'react-redux'
import { RootState } from '../../reducers'

import {
  fetchItem,
  fetchItemsIfNeeded
} from './../../action'
import { Item } from '../../types'

import Banner from './banner'
import CatalogBlock from './catalog-block'
import AboutBlock from './about-block'
import BestsellerBlock from './bestseller-block'
import SelectionBlock from './selection-block'


const mapStateToProps = (store: RootState) => {
  return {
    allItems: store.allItems,
    itemsByFilters: store.itemsByFilters,
    product_type: store.filters.selectedProductType
  }
}

const mapDispatchToProps = {
  fetchItem,
  fetchItemsIfNeeded
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type IndexPageTypes = ConnectedProps<typeof connector>

const IndexPage: React.FC<IndexPageTypes> = (props) => {

  const popularItemsQuery = `.json?price_greater_than=10&rating_greater_than=4.9`
  const {itemsId, isFetching, isFailure, err} = props.itemsByFilters[popularItemsQuery] || {itemsId: []}
  
  const [bannerItems, setBannerItems] = useState<Item[]>()
  const BANNER1_ID = 377
  const BANNER2_ID = 419

  useEffect(() => {
    props.fetchItemsIfNeeded(popularItemsQuery)
  }, [popularItemsQuery])

  useEffect(() => {
    if (!props.allItems[BANNER1_ID]) {
      props.fetchItem(BANNER1_ID)
    }
  }, [props.allItems[BANNER1_ID]])

  useEffect(() => {
    if (!props.allItems[BANNER2_ID]) {
      props.fetchItem(BANNER2_ID)
    }
  }, [props.allItems[BANNER2_ID]])

  useEffect(() => {
    if (props.allItems[BANNER2_ID] && props.allItems[BANNER1_ID]) {
      props.allItems[BANNER2_ID].rating = 0
      props.allItems[BANNER1_ID].rating = 0
      setBannerItems([props.allItems[BANNER1_ID],props.allItems[BANNER2_ID]])
    }
  },[props.allItems[BANNER2_ID], props.allItems[BANNER1_ID]])


  return (
    <main className="page-main">
      {
        bannerItems ? <Banner bannerItems = {bannerItems} /> : <>Загрузка ...</>
      }
      <CatalogBlock />
      <AboutBlock />
      {
        isFetching ? <section className="bestseller-block container">Данные загружаются ... </section> 
        : itemsId.length ? <BestsellerBlock product_type={props.product_type} itemsId = {itemsId} allItems = {props.allItems}/> 
      : isFailure ? <div>Произошла ошибка "{err?.message}"</div> 
      : <div>По таким настройкам фильтра не найдено ни одного продукта</div>
      }
      <SelectionBlock />
    </main>
  )
}
export default connector(IndexPage)