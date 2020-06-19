import React, {useEffect} from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {useParams} from 'react-router-dom'

import {RootState} from './../../reducers'
import {selectProductType} from './../../action'
import {getItems} from './../../action/thunk-action'
import MainNav from './../main-nav'
import ListBlock from './catalog-list'

const CatalogMain: React.FC<Props> = (props) => {
  const {activelink, selectProductType, getItems} = props
  let {product_type} = useParams()  
  useEffect(() => {
    if (activelink !== product_type) {
      selectProductType(product_type)
      getItems(product_type)
    }
  }, [product_type, activelink, selectProductType, getItems])

  return (
    <main className="page-main--catalog container">
      <MainNav {...props}/>
      <ListBlock {...props} />
      CATALOG
    </main>
  )
}

const mapState = (state: RootState) => ({
  activelink: state.selectedProductType,
  items: state.allItemsByProductType[state.selectedProductType] || []
})

const mapDispatch = {
  selectProductType,
  getItems
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {
  links: string[],
  to: string[]
}

export default connector (CatalogMain)