import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {selectProductType} from './../../action'
import {PAGEMAP, PRODUCT_TYPE} from './../../types'

type Props = {
  hiddenMenuPopup: () => void,
  props: {
    dispatch: (func: ()=>void) => void
  }
}

const MenuPopup = ({hiddenMenuPopup, ...props}: Props) => {
  
  const onTypeProductClick = function (productPage: PRODUCT_TYPE) {
    props.dispatch()
  }

  return (
    <div className="menu-popup" onClick = {hiddenMenuPopup}>
      <nav className="menu-popup__nav">
        <ul className="menu-popup__nav-list">
          <li className="menu-popup__nav-item">
            <Link to='/catalog/blush' onClick={() => onTypeProductClick(PRODUCT_TYPE.blush)} >
              {PAGEMAP.blush}
            </Link>
          </li>
          <li className="menu-popup__nav-item">
            <Link to='/catalog/bronzer'>
              {PAGEMAP.bronzer}
            </Link>
          </li>
          <li className="menu-popup__nav-item">
            <Link to='/catalog/eyebrow'>
              {PAGEMAP.eyebrow}
            </Link>
          </li>
          <li className="menu-popup__nav-item">
            <Link to='/catalog/eyeliner'>
              {PAGEMAP.eyeliner}
            </Link>
          </li>
          <li className="menu-popup__nav-item">
            <Link to='/catalog/eyeshadow'>
              {PAGEMAP.eyeshadow}
            </Link>
          </li>
          <li className="menu-popup__nav-item">
            <Link to='/catalog/foundation'>
              {PAGEMAP.foundation}
            </Link>
          </li>
          <li className="menu-popup__nav-item">
            <Link to='/catalog/lip_liner'>
              {PAGEMAP.lip_liner}
            </Link>
          </li>
          <li className="menu-popup__nav-item">
            <Link to='/catalog/lipstick'>
              {PAGEMAP.lipstick}
            </Link>
          </li>
          <li className="menu-popup__nav-item">
            <Link to='/catalog/mascara'>
             {PAGEMAP.mascara}
            </Link>
          </li>
          <li className="menu-popup__nav-item">
            <Link to='/catalog/nail_polish'>
              {PAGEMAP.nail_polish}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default connect()(MenuPopup)