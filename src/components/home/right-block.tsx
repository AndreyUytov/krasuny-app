import React from 'react';

const RightBLock: React.FC = () => {
  return (
    <div className="header-right-block">
          <nav className="header-right-block__site-nav">
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
            <button className="site-nav__btn btn" type="button">
              Подбор косметики
            </button>
          </nav>
        </div>
  )
}

export default RightBLock