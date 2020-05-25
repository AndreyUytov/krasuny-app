import React, {useEffect} from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {useParams} from 'react-router-dom'

import {RootState} from './../../reducers'
import {selectProductType} from './../../action'
import MainNav from './../main-nav'

const CatalogMain: React.FC<Props> = ({links, to, activelink, selectProductType}) => {

  let {product_type} = useParams()  
  useEffect(() => {
    if (activelink !== product_type) {
      selectProductType(product_type)
    }
  }, [product_type, activelink, selectProductType])

  return (
    <main className="page-main--catalog container">
      <MainNav links={links} activelink={activelink} to={to}/>
      CATALOG
    </main>
  )
}

const mapState = (state: RootState) => ({
  activelink: state.selectedProductType
})

const mapDispatch = {
  selectProductType
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {
  links: string[],
  to: string[]
}

export default connector (CatalogMain)