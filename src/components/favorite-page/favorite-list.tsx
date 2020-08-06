import React from 'react'
import { Link } from 'react-router-dom'

import { Item, PAGEMAP } from '../../types'

function renderItems (items: Item[]) {
  return items.map((elem) => {
    return (
      <li key = {elem.id}>
        <Link to={'/'+ PAGEMAP[elem.product_type] + '/' + elem.id} className="production-list-block-card card card--hit">
          <img className="card__img"
            src={elem.image_link}
            width="185" height="165"
            alt="Изображение товара" />
          <div className="card-description__wrapper">
            <div className="stars-rating">
              <svg className="stars-rating__svg" width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <use xlinkHref="#empty-star" />
                  <use x="24px" xlinkHref="#empty-star" />
                  <use x="48px" xlinkHref="#empty-star" />
                  <use x="72px"xlinkHref="#empty-star" />
                  <use x="96px" xlinkHref="#empty-star" />
                  <rect width={elem.rating / 0.05 + '%'} height="100%" fill='#EC8453'  mask="url(#star-mask)"/>
                </g>
              </svg>
            </div>
            <h3 className="card__title">
              {elem.name.length > 20 ? `${elem.name.slice(0, 17)} ...` : elem.name}
            </h3>
            <p className="card__price price">
              {elem.price} {elem.price_sign}
            </p>
          </div>
        </Link>
      </li>
    )
  })
}

const FavoritesList: React.FC<{items: Item[]}> = ({items}) => {
  return (
    <section className="profile-block-main">
      <h2 className="profile-block-main__title">Избранные товары</h2>
      <ul className="production-list-block__catalog-list">
        {
          renderItems(items)
        }
      </ul>
    </section>
  )
}

export default FavoritesList