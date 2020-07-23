import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {
  Item,
  PAGEMAP,
  MAX_ITEMS_PER_PAGE,
  PRODUCT_TYPE,
  TAG_LIST,
  SELECTION,
  BrandsList
} from './../../types'

import { fetchItemsIfNeeded,
  setFilterByTags,
  resetFilterByTags,
  deleteFilterByTags,
  setFilterByProductType,
  resetCurrentPage,
  setFilterBySelection
 } from './../../action'
import TagPopup from './../popups/tag'
import TagList from './tags-list'
import SelectFilterBlock from './filter-selection'

function renderItems (items: Item[]) {
  return items.map((elem) => {
    return (
      <li key = {elem.id}>
        <a className="production-list-block-card card card--hit">
          <img className="card__img"
            src={elem.image_link}
            width="185" height="185"
            alt="Изображение товара" />
          <div className="card-description__wrapper">
            <h3 className="card__title">
              {elem.name.length > 25 ? `${elem.name.slice(0, 25)} ...` : elem.name}
            </h3>
            <p className="card__price price">
              {elem.price} {elem.price_sign}
            </p>
          </div>
        </a>
      </li>
    )
  })
}

interface IListItemsSection {
  items: Item [],
  page: number,
  product_type: PRODUCT_TYPE,
  query: string,
  tags: TAG_LIST[],
  itemsIsFetching: boolean,
  itemsIsFailure: boolean,
  err: TypeError | undefined,
  selection: SELECTION | undefined,
  brand: BrandsList | undefined,
  fetchItemsIfNeeded: typeof fetchItemsIfNeeded,
  setFilterByTags: typeof setFilterByTags,
  resetFilterByTags: typeof resetFilterByTags,
  deleteFilterByTags: typeof deleteFilterByTags,
  setFilterByProductType: typeof setFilterByProductType,
  resetCurrentPage: typeof resetCurrentPage,
  setFilterBySelection: typeof setFilterBySelection
}

const ListItemsSection: React.FC<IListItemsSection> = (props) => {
  const {items, page, product_type, query, fetchItemsIfNeeded, tags, setFilterByProductType, itemsIsFetching, itemsIsFailure, err} = props
  const [currentItems, setCurrentItems] = useState<Item[]>([])
  const [tagsPopupVisible, setTagsPopupVisible] = useState(false)

  const {product_type: product_type_from_params} = useParams()
    useEffect (() => {
    if(product_type !== product_type_from_params) {
      setFilterByProductType(product_type_from_params)
    }
  }, [product_type, product_type_from_params])

  useEffect(() => {
    fetchItemsIfNeeded(query)
  }, [fetchItemsIfNeeded, query])

  useEffect (() => {
    if (props.selection === 'rating') {
      items.sort( (a, b) => b.rating - a.rating)
    }
    if (props.selection === 'price') {
      items.sort((a, b) => a.price - b.price)
    }
    let startIndex = (page - 1) * MAX_ITEMS_PER_PAGE
    let endIndex = page * MAX_ITEMS_PER_PAGE
    let itemsByPage = items.slice(startIndex, endIndex)
    setCurrentItems(itemsByPage)
  }, [page, items, props.selection])

    return (
      <section className = "production-list-block">
        <h2 className = "production-list-block__title">
          {PAGEMAP[product_type]}
        </h2>
        <div className="production-list-block__tags">
          <div className="tags-wrapper">
          {
           tags ? <TagList {...props} /> 
            : (<ul className="production-list-block__tags-list"></ul>)
          }
            <button className="production-list-block__add-snap snap" type="button" onClick={() => setTagsPopupVisible(true)}>
              <span className="visually-hidden">Добавить тэг</span>
            </button>
          </div>
          <SelectFilterBlock {...props} />
        </div>
        <ul className="production-list-block__catalog-list">
          {
            itemsIsFetching ? <div>Данные загружаются ... </div> 
            : items.length ? renderItems(currentItems) 
          : itemsIsFailure ? <div>Произошла ошибка "{err?.message}"</div> 
          : <div>По таким настройкам фильтра не найдено ни одного продукта</div>
          }
        </ul>
        {
          tagsPopupVisible 
            ? <TagPopup {...props} hideTagPopup={setTagsPopupVisible} />
            : null
        }
      </section>
    )
}

export default ListItemsSection