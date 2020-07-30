import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {connect, ConnectedProps} from 'react-redux'
import { RootState } from '../../reducers'

import MainNav from './../main-nav'
import DescriptionBlock from './descr-block'
import AsideOrderBlock from './aside-order-block'

import { PAGEMAP } from '../../types'
import {
  fetchItem,
  addToFavorites,
  removeFromFavorites,
  addToBasket
} from './../../action'

const mapStateToProps = (store: RootState) => {
  return {
    allItems: store.allItems,
    product_type: store.filters.selectedProductType,
    favoritesItems: store.itemsByFavorites,
    basketItems: store.itemsByBasket
  }
}

const mapDispatchToProps = {
  fetchItem,
  addToFavorites,
  removeFromFavorites,
  addToBasket
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type CardPageTypes = ConnectedProps<typeof connector>

const Card: React.FC<CardPageTypes> = (props) => {
  const {product_id} = useParams()
  let item = props.allItems[+product_id] || undefined

  useEffect(() => {
    if(!item) {
      props.fetchItem(+product_id)
    }
  }, [product_id, item])

  return (
    <main className="page-main--card">
      <div className="page-main-card__wrapper container">
        {item === undefined ? 
         <>Загружаю ...</> 
         : item.id ? 
         <>
          <MainNav links = {['Главная', PAGEMAP[props.product_type]]} to = {['/', `/catalog/${props.product_type}`]} activeLink={item.name}  />
          <DescriptionBlock item={item} />
          <AsideOrderBlock item={item} {...props} />
        </>
        : <>{item.message}</> 
        }
      </div>
    </main>
  )
}

export default connector(Card)