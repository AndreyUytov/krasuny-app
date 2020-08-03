import React, {useState} from 'react'

import MenuPopup from './../popups/menu'
import SearchForm from './search-form'
import logo from './../../images/content/KRASUNYA.png'

import {resetCurrentPage} from './../../action'
import { Link } from 'react-router-dom'

const LeftBlock: React.FC<{resetCurrentPage: typeof resetCurrentPage}> = (props) => {

  const [visibleForm, setVisibleForm] = useState(false)
  const [visibleMenuPopup, setVisibleMenuPopup] = useState(false)

  const showForm = ():void => {
    setVisibleForm(true)
  }
  const hiddenForm = ():void => {
    setVisibleForm(false)
  }
  const hiddenMenuPopup = ():void => {
    setVisibleMenuPopup(false)
  }

  return (
    <>
      <div className="header-left-block__wrapper">
        <div className="header-left-block">
          <div className="header-left-block__inner-wrapper">
            <Link to='/'>
              <img className="header-left-block__logo" src={logo} width="140" height="18"
                alt="logo-krasunya"/>
            </Link>
            {visibleForm
                ? <SearchForm onCloseSnap = {hiddenForm} visibleForm={visibleForm}/>
                : <>
                    <button className="header-left-block__catalog-snap snap" type="button"
                      onClick = {() => setVisibleMenuPopup(true)}>
                      Каталог косметики
                    </button>
                    <button className="header-left-block__search-snap snap" type="button"
                    onClick={showForm}>
                      <span className="visually-hidden">Открыть форму поиска</span>
                    </button>
                  </>
            }
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

export default LeftBlock;