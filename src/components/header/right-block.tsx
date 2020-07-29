import React, {useState} from 'react';

import SelectionPopup from './../popups/selection'
import { useRouteMatch } from 'react-router-dom';

const RightBLock: React.FC = () => {
  const [visibleSelectionPopup, setVisibleSelectionPopup] = useState(false)
  const hiddenSelectionPopup = (): void => {
    setVisibleSelectionPopup(false)
  }

  let {path} = useRouteMatch()
  return (
    <>
      <div className="header-right-block">
        <nav className="header-right-block__site-nav" style = {/\/$/.test(path) ? {} : {position: 'fixed'}} >
          <ul className="site-nav__list nav-list">
            <li>
              <a href="" className="site-nav__item site-nav__item--favorite">
                <span className="visually-hidden">Избранное</span>
              </a>
            </li>
            <li>
              <a href="" className="site-nav__item site-nav__item--login">
                <span className="visually-hidden">Личный кабинет</span>
              </a>
            </li>
            <li>
              <a href="" className="site-nav__item site-nav__item--basket">
                <span className="visually-hidden">Корзина</span>
              </a>
            </li>
          </ul>
          <button className="site-nav__btn btn" type="button"
            onClick = {() => setVisibleSelectionPopup(true)}>
            Подбор косметики
          </button>
        </nav>
      </div>
      {visibleSelectionPopup
        ? <SelectionPopup hiddenSelectionPopup = {hiddenSelectionPopup} />
        : null
      }
    </>
  )
}

export default RightBLock