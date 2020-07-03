import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import {PAGEMAP, PRODUCT_TYPE, Items, TAG_LIST} from './../../types'
import TagPopup from './../popups/tag'
import TagsList from './tags-list'

interface PropsForList {
  currentItems: Items[]
}

const ListRender: React.FC<PropsForList> = ({currentItems}) => {
  return (
    <>
      {currentItems.map((elem) => {
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
          )}
      )
      }
    </>
  )
}

interface Props {
  activelink: PRODUCT_TYPE,
  currentItems: Items[],
  selectedTags: TAG_LIST [],
  deleteTag: (elem: TAG_LIST) => void,
  setSelectedTags: (selectedTags: TAG_LIST[]) => void,
  resetFilterByTags: () => void
}

const ListBlock: React.FC<Props> = (props) => {

  const {activelink, currentItems, selectedTags, deleteTag} = props

  const [isTagPopupVisible, setIsTagPopupVisible] = useState(false)
  const showTagPopup = ():void => {
    setIsTagPopupVisible(true)
  }
  const hideTagPopup = ():void => {
    setIsTagPopupVisible(false)
  }

  return (
    <section className = "production-list-block">
      <h2 className = "production-list-block__title">
        {PAGEMAP[activelink]}
      </h2>
      <div className="production-list-block__tags">
        <div className="tags-wrapper">
          {
           selectedTags?.length ? <TagsList selectedTags = {selectedTags} deleteTag = {deleteTag} /> 
            : (<ul className="production-list-block__tags-list"></ul>)
          }
          <button className="production-list-block__add-snap snap" type="button" onClick={showTagPopup}>
            <span className="visually-hidden">Добавить тэг</span>
          </button>
        </div>
      </div>
      <ul className="production-list-block__catalog-list">
        {
          currentItems && currentItems.length ? <ListRender currentItems = {currentItems}/> : <div>Loading</div>
        }
      </ul>
      {isTagPopupVisible 
        ? <TagPopup {...props} hideTagPopup={hideTagPopup} activelink={activelink}/>
        : null

      }
    </section>
  )
}

export default ListBlock