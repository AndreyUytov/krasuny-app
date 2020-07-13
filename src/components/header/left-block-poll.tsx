import React, {useState} from 'react'

import MenuPopup from './../popups/menu'
import logo from './../../images/content/KRASUNYA.png'

import {resetCurrentPage} from './../../action'

const LeftBlockPoll: React.FC<{resetCurrentPage: typeof resetCurrentPage}> = (props) => {

  const [visibleMenuPopup, setVisibleMenuPopup] = useState(false)
  const hiddenMenuPopup = ():void => {
    setVisibleMenuPopup(false)
  }
  return (
    <>
      <div className="header-left-block__wrapper">
        <div className="header-left-block">
          <div className="header-left-block__inner-wrapper">
            <img className="header-left-block__logo" src={logo} width="140" height="18"
              alt="logo-krasunya"/>
            <button className="header-left-block__catalog-snap snap" type="button"
              onClick = {() => setVisibleMenuPopup(true)}>
              Каталог косметики
            </button>        
            <div className="header-left-block__progress-bar">
              <span className="bar">
                <span className="scale"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
      {visibleMenuPopup
        ? <MenuPopup hiddenMenuPopup = {hiddenMenuPopup} {...props}/>
        : null
      }
    </>
  )
}

export default LeftBlockPoll