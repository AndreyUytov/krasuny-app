import React, {useEffect, useState} from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {useParams} from 'react-router-dom'

import {RootState} from './../../reducers'
import { selectProductType,
          deleteFilterByTags,
          setFilterByTags,
          resetFilterByTags,
          resetPaginationPage,
          setPaginationPage
} from './../../action'
import {getItems} from './../../action/thunk-action'
import {Items, MAX_ITEMS_PER_PAGE, TAG_LIST} from './../../types'
import MainNav from './../main-nav'
import ListBlock from './catalog-list'
import PaginationBlock from './pagination'


const CatalogMain: React.FC<Props> = (props) => {
  const {activelink, selectProductType, getItems, items, deleteFilterByTags, setFilterByTags} = props
  let {product_type} = useParams()  
  useEffect(() => {
    if (activelink !== product_type) {
      selectProductType(product_type)
      getItems(product_type)
    }
  }, [product_type, activelink, selectProductType, getItems])

  const [currentPage, setCurrentPage] = useState(1)
  const [currentItems, setCurrentItems] = useState<Items[]>([])

  let maxPage = Math.ceil(items.length / MAX_ITEMS_PER_PAGE)
  
  useEffect(() => {
    let startIndex = (currentPage - 1) * MAX_ITEMS_PER_PAGE
    let endIndex = currentPage * MAX_ITEMS_PER_PAGE
    let itemsByPage = items.slice(startIndex, endIndex)
    setCurrentItems(itemsByPage)
  }, [items, currentPage])

  const deleteTag = (elem: TAG_LIST) => {
    deleteFilterByTags(elem)
  }

  const setSelectedTags = (selectedTags: TAG_LIST []) => {
    if (selectedTags?.length) {
      setFilterByTags(selectedTags)
    }
  }

  return (
    <main className="page-main--catalog container">
      <MainNav {...props}/>
      <section className="filter-block">FILTER</section>
      <ListBlock {...props} currentItems = {currentItems} deleteTag = {deleteTag} setSelectedTags = {setSelectedTags} />
      {maxPage === 0 ? null : <PaginationBlock {...props} currentPage = {currentPage} setCurrentPage = {setCurrentPage} /> }
    </main>
  )
}

const mapState = (state: RootState) => ({
  activelink: state.selectedProductType,
  items: state.allItemsByProductType[state.selectedProductType] || [],
  selectedTags: state.filters.selectedTags,
  page: state.pagination.page
})

const mapDispatch = {
  selectProductType,
  getItems,
  setFilterByTags,
  deleteFilterByTags,
  resetFilterByTags,
  resetPaginationPage,
  setPaginationPage
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {
  links: string[],
  to: string[]
}

export default connector (CatalogMain)