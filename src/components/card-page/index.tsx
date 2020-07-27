import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {connect, ConnectedProps} from 'react-redux'
import { RootState } from '../../reducers'

import MainNav from './../main-nav'
import DescriptionBlock from './descr-block'

import { PAGEMAP } from '../../types'
import {
  fetchItems
} from './../../action'

const mapStateToProps = (store: RootState) => {
  return {
    allItems: store.allItems,
    product_type: store.filters.selectedProductType
  }
}

const mapDispatchToProps = {
  fetchItems
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type CardPageTypes = ConnectedProps<typeof connector>

const Card: React.FC<CardPageTypes> = (props) => {
  const {product_id} = useParams()
  let item = props.allItems[+product_id] || undefined
  const g = null

  useEffect(() => {
    if(!item) {
      props.fetchItems(`products/${+product_id}.json`)
    }
  }, [product_id, item])

  return (
    <main className="page-main--card">
      <div className="page-main-card__wrapper container">
        {item ? 
        <>
          <MainNav links = {['Главная', PAGEMAP[props.product_type]]} to = {['/', `/catalog/${props.product_type}`]} activeLink={item.name}  />
          <DescriptionBlock item={item}/>
        </>
        : <>Загружаю ...</>}
      </div>
    </main>
  )
}

export default connector(Card)