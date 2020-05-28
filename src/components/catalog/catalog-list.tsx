import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import {PAGEMAP, PRODUCT_TYPE} from './../../types'
import TagPopup from './../popups/tag'

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