import React from 'react'
import { Link } from 'react-router-dom'
import { PRODUCT_TYPE, Item } from '../../types'

const Banner: React.FC<{bannersItems: Item[]}> = ({bannersItems}) => {
  return (
    <section className="banner-block container">
      <div className="banner-block__left-section">
        <strong className="banner-block__slogan">Профессиональный уход дома!</strong>
        <span className="banner-block__description">
        Преобретите медицинскую косметику для ухода за собой, не пользуясь услугами косметолога.
        </span>
        <button className="banner-block__btn btn-fon" type="button">
        Подобрать косметику под себя
        </button>
      </div>
      <div className="banner-block__banner-products">
        <ul className="banner-products__list">
          <li className="banner-products__list-item">
            <figure>
              <Link to = {`/${PRODUCT_TYPE[bannersItems[0].product_type]}/${bannersItems[0].id}`} className="banner-img banner-img--z-index">
                <img src={bannersItems[0].image_link}
                width="178" height="473" alt="product-banner imagination"/>
              </Link>
              <figcaption className="first-figcaption">
                <div className="small-card">
                  <img className="small-card__img" 
                  src={bannersItems[0].image_link}
                  alt="small product card imagine" width="63" height="63" />
                  <div className="small-card-description__wrapper">
                    <h3 className="small-card__title">
                    {bannersItems[0].name}
                    </h3>
                    <span className="small-card__price price price--discount">
                    {bannersItems[0].price} {bannersItems[0].price_sign}
                    </span>
                  </div>
                </div>
              </figcaption>
            </figure>
          </li>
          <li className="banner-products__list-item">
            <figure>
              <Link to = {`/${PRODUCT_TYPE[bannersItems[1].product_type]}/${bannersItems[2].id}`} className="banner-img">
              <img src={bannersItems[1].image_link}
              width="144" height="386" alt="product-banner imagination" />
              </Link>
              <figcaption className="two-figcaption">
                <div className="small-card">
                  <img className="small-card__img" 
                  src={bannersItems[1].image_link}
                  alt="small product card imagine" width="63" height="63" />
                  <div className="small-card-description__wrapper">
                    <h3 className="small-card__title">
                    {bannersItems[1].name}
                    </h3>
                    <span className="small-card__price price price--discount">
                    {bannersItems[1].price} {bannersItems[1].price_sign}
                    </span>
                  </div>
                </div>
              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Banner