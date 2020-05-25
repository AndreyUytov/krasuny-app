import React from 'react'
import {Link} from 'react-router-dom'

import {PAGEMAP, PRODUCT_TYPE} from './../../types'

type Props = {
  hiddenMenuPopup: () => void
}

const MenuPopup = ({hiddenMenuPopup}: Props) => {
  return (
    <div className="menu-popup" onClick = {hiddenMenuPopup}>
      <nav className="menu-popup__nav">
        <ul className="menu-popup__nav-list">
          <li className="menu-popup__nav-item">
            <Link to={`/catalog/${PRODUCT_TYPE.blush}`} >
              {PAGEMAP.blush}
            </Link>
          </li>
          <li className="menu-popup__nav-item">
            <Link to={`/catalog/${PRODUCT_TYPE.bronzer}`}>
              {PAGEMAP.bronzer}
            </Link>
          </li>
          <li className="menu-popup__nav-item">
            <Link to={`/catalog/${PRODUCT_TYPE.eyebrow}`}>
              {PAGEMAP.eyebrow}
            </Link>
          </li>
          <li className="menu-popup__nav-item">
            <Link to={`/catalog/${PRODUCT_TYPE.eyeliner}`}>
              {PAGEMAP.eyeliner}
            </Link>
          </li>
          <li className="menu-popup__nav-item">
            <Link to={`/catalog/${PRODUCT_TYPE.eyeshadow}`}>
              {PAGEMAP.eyeshadow}
            </Link>
          </li>
          <li className="menu-popup__nav-item">
            <Link to={`/catalog/${PRODUCT_TYPE.foundation}`}>
              {PAGEMAP.foundation}
            </Link>
          </li>
          <li className="menu-popup__nav-item">
            <Link to={`/catalog/${PRODUCT_TYPE.lip_liner}`}>
              {PAGEMAP.lip_liner}
            </Link>
          </li>
          <li className="menu-popup__nav-item">
            <Link to={`/catalog/${PRODUCT_TYPE.lipstick}`}>
              {PAGEMAP.lipstick}
            </Link>
          </li>
          <li className="menu-popup__nav-item">
            <Link to={`/catalog/${PRODUCT_TYPE.mascara}`}>
             {PAGEMAP.mascara}
            </Link>
          </li>
          <li className="menu-popup__nav-item">
            <Link to={`/catalog/${PRODUCT_TYPE.nail_polish}`}>
              {PAGEMAP.nail_polish}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MenuPopup