import React from 'react'
import { Link } from 'react-router-dom'

import { Item, PAGEMAP, PRODUCT_TYPE } from '../../types'
import {getAllItems} from './../../selectors'

function renderItems (items: Item[], product_type: PRODUCT_TYPE) {
  return items.map((elem) => {
    return (
      <li key = {elem.id}>
        <Link to={'/'+ PAGEMAP[product_type] + '/' + elem.id} className="card--popullar card">
          <img className="card__img"
            src={elem.image_link}
            width="275" height="275"
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

const BestsellerBlock: React.FC<{allItems: any, itemsId: number[], product_type: PRODUCT_TYPE}> = ({itemsId, product_type, allItems}) => {
  
  const items = getAllItems(itemsId, allItems)

  return (
    <section className="bestseller-block container">
      <h2 className="bestseller-block__title">
        Популярные товары
      </h2>
      <p className="bestseller-block__description">
        Чаще всего у нас покупают эти товары, потому что они лучше всего помогают женщинам.
      </p>
      <ul className="bestseller-block__product-list product-list">
        {renderItems(items.slice(0,8), product_type)}
      </ul>
    </section>
  )
}

export default BestsellerBlock