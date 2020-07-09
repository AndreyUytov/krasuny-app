import React from 'react'
import {NavLink} from 'react-router-dom'

import {PAGEMAP, PRODUCT_TYPE} from './../../types'

interface Props {
  links: string[],
  to: string[],
  product_type: PRODUCT_TYPE
}

const MainNav: React.FC<Props> = ({links, to, product_type}) => {

  const convertLink = PAGEMAP[product_type]

  return (
    <nav className="breadcrumbs-nav">
      <ul className="breadcrumbs-nav__list">
        {
          links.map((elem: string, i: number) => {
            return (
              <li key={i}>
                <NavLink to={to[i]} className="breadcrumbs-nav__link link">
                  {elem}
                </NavLink>
              </li>
            )
          })
        }
        <li key={10} >
          <span className="breadcrumbs-nav__link link link--active">
            {convertLink}
          </span>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav