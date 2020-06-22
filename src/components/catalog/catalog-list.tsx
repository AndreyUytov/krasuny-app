import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import {PAGEMAP, PRODUCT_TYPE, Items} from './../../types'
import TagPopup from './../popups/tag'

interface PropsForList {
  items: Items[]
}

const ListRender: React.FC<PropsForList> = ({items}) => {
  return (
    <>
      {items.map((elem) => {
          return (
            <li key = {elem.id}>
              <a className="production-list-block-card card card--hit">
                <img className="card__img"
                  src="./../images/content/popular-product-card4.png" 
                  width="185" height="185"
                  alt="card pictur" />
                <div className="card-description__wrapper">
                  <h3 className="card__title">
                    {elem.name}
                  </h3>
                  <p className="card__price price">
                    12 250 грн.
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
  items: Items[]
}

const ListBlock: React.FC<Props> = ({activelink, items}) => {

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
          <button type='button' onClick={showTagPopup}>
            Add tag
          </button>
        </div>
      </div>
      <ul className="production-list-block__catalog-list">
        {
          items.length ? <ListRender items = {items}/> : <div>Loading</div>
        }
      </ul>
      {isTagPopupVisible 
        ? <TagPopup hideTagPopup={hideTagPopup} activelink={activelink}/>
        : null

      }
    </section>
  )
}

export default ListBlock