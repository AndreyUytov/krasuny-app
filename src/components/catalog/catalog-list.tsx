import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import {PAGEMAP, PRODUCT_TYPE} from './../../types'
import TagPopup from './../popups/tag'

interface PropsForList {
  items: any[]
}

const ListRender: React.FC<PropsForList> = ({items}) => {
  return (
    <>
      {items.map((elem) => {
          return (
            <li>
              <a className="production-list-block-card card card--hit">
                <img className="card__img"
                  src="./../images/content/popular-product-card4.png" 
                  width="185" height="185"
                  alt="card pictur" />
                <div className="card-description__wrapper">
                  <h3 className="card__title">
                    ТСА 10% DAY Peel 10% ТСА Dermagenetic
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
  activelink: PRODUCT_TYPE
}

const ListBlock: React.FC<Props> = ({activelink}) => {

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
          <ul className="production-list-block__tags-list">

          </ul>
        </div>
      </div>
      {isTagPopupVisible 
        ? <TagPopup hideTagPopup={hideTagPopup} activelink={activelink}/>
        : null

      }
    </section>
  )
}

export default ListBlock