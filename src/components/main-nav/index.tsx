import React from 'react'
import {NavLink} from 'react-router-dom'

interface Props {
  links: string[],
  to: string[],
  activelink: string
}

const MainNav: React.FC<Props> = ({links, to, activelink}) => {
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
            {activelink}
          </span>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav