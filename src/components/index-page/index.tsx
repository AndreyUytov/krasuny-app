import React, { useEffect, useState } from 'react'
import {connect, ConnectedProps} from 'react-redux'
import { RootState } from '../../reducers'

import {
  fetchItem
} from './../../action'

import Banner from './banner'
import { Item } from '../../types'

const mapStateToProps = (store: RootState) => {
  return {
    allItems: store.allItems
  }
}

const mapDispatchToProps = {
  fetchItem
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type IndexPageTypes = ConnectedProps<typeof connector>

const IndexPage: React.FC<IndexPageTypes> = (props) => {
  
  const [bannerItems, setBannerItems] = useState<Item[]>()
  const BANNER1_ID = 377
  const BANNER2_ID = 419

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
  }, [props.allItems[BANNER1_ID], props.allItems[BANNER2_ID]])

  return (
    <main className="page-main">
      {
        bannerItems ? <Banner bannerItems = {bannerItems} /> : <>Загрузка ...</>
      }
    </main>
  )
}
export default connector(IndexPage)