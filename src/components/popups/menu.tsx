import React from 'react'

const MenuPopup: React.FC<{hiddenMenuPopup: () => void }> = ({hiddenMenuPopup}) => {
  return (
    <div className="menu-popup" onClick = {hiddenMenuPopup}>
      <nav className="menu-popup__nav">
        <ul className="menu-popup__nav-list">
          <li className="menu-popup__nav-item">
            <a href="">
              Очищающие средства, тонизация
            </a>
          </li>
          <li className="menu-popup__nav-item">
            <a href="">
              Мезороллеры, аксессуары
            </a>
          </li>
          <li className="menu-popup__nav-item">
            <a href="">
              Средства для волос и тела
            </a>
          </li>
          <li className="menu-popup__nav-item">
            <a href="">
              Средства для орбитальной зоны
            </a>
          </li>
          <li className="menu-popup__nav-item">
            <a href="">
              Карбокситерапия
            </a>
          </li>
          <li className="menu-popup__nav-item">
            <a href="">
              Концентраты, мезококтейли
            </a>
          </li>
          <li className="menu-popup__nav-item">
            <a href="">
              Химические пилинги
            </a>
          </li>
          <li className="menu-popup__nav-item">
            <a href="">
              Средства с SPF, BB/CC-крема
            </a>
          </li>
          <li className="menu-popup__nav-item">
            <a href="">
              Маски
            </a>
          </li>
          <li className="menu-popup__nav-item">
            <a href="">
              Крема, сыворотки
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MenuPopup