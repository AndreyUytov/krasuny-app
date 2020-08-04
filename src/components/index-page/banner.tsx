import React from 'react'
import { Link } from 'react-router-dom'
import { PRODUCT_TYPE, Item } from '../../types'

import bigBanner from './../../images/content/banner-big-img.png'
import smallBanner from './../../images/content/banner-small-img.png'

const Banner: React.FC<{bannerItems: Item[]}> = ({bannerItems}) => {
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
              <Link to = {`/${PRODUCT_TYPE[bannerItems[0].product_type]}/${bannerItems[0].id}`} className="banner-img banner-img--z-index">
                <img src={bigBanner}
                width="210" height="243" alt="product-banner imagination"/>
              </Link>
              <figcaption className="first-figcaption">
                <div className="small-card">
                  <img className="small-card__img" 
                  src={bannerItems[0].image_link}
                  alt="small product card imagine" width="63" height="63" />
                  <div className="small-card-description__wrapper">
                    <h3 className="small-card__title">
                    {bannerItems[0].name}
                    </h3>
                    <span className="small-card__price price price--discount">
                    {bannerItems[0].price} {bannerItems[0].price_sign}
                    </span>
                  </div>
                </div>
              </figcaption>
            </figure>
          </li>
          <li className="banner-products__list-item">
            <figure>
              <Link to = {`/${PRODUCT_TYPE[bannerItems[1].product_type]}/${bannerItems[1].id}`} className="banner-img banner-img--z-index">
                <img src={smallBanner}
                width="210" height="243" alt="product-banner imagination"/>
              </Link>
              <figcaption className="first-figcaption">
                <div className="small-card">
                  <img className="small-card__img" 
                  src={bannerItems[1].image_link}
                  alt="small product card imagine" width="63" height="63" />
                  <div className="small-card-description__wrapper">
                    <h3 className="small-card__title">
                    {bannerItems[1].name}
                    </h3>
                    <span className="small-card__price price price--discount">
                    {bannerItems[1].price} {bannerItems[1].price_sign}
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