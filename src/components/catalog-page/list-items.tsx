import React, {useState, useEffect} from 'react'
import {
  Item,
  PAGEMAP,
  MAX_ITEMS_PER_PAGE,
  PRODUCT_TYPE,
  TAG_LIST
} from './../../types'

import { fetchItemsIfNeeded,
  setFilterByTags,
  resetFilterByTags
 } from './../../action'
import TagPopup from './../popups/tag'

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
  fetchItemsIfNeeded: typeof fetchItemsIfNeeded,
  setFilterByTags: typeof setFilterByTags,
  resetFilterByTags: typeof resetFilterByTags
}

const ListItemsSection: React.FC<IListItemsSection> = (props) => {
  const {items, page, product_type, query, fetchItemsIfNeeded} = props
  const [currentItems, setCurrentItems] = useState<Item[]>([])
  const [tagsPopupVisible, setTagsPopupVisible] = useState(false)

  useEffect(() => {
    fetchItemsIfNeeded(query)
  }, [query, fetchItemsIfNeeded])

  useEffect (() => {
    let startIndex = (page - 1) * MAX_ITEMS_PER_PAGE
    let endIndex = page * MAX_ITEMS_PER_PAGE
    let itemsByPage = items.slice(startIndex, endIndex)
    setCurrentItems(itemsByPage)
  }, [page, items])

    return (
      <section className = "production-list-block">
        <h2 className = "production-list-block__title">
          {PAGEMAP[product_type]}
        </h2>
        <div className="production-list-block__tags">
          <div className="tags-wrapper">
            список с выбранными тэгами будет здесь
            <button className="production-list-block__add-snap snap" type="button" onClick={()=> setTagsPopupVisible(true)}>
              <span className="visually-hidden">Добавить тэг</span>
            </button>
          </div>
        </div>
        <ul className="production-list-block__catalog-list">
          {
            currentItems.length ? renderItems(currentItems) : <div>Loading</div>
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