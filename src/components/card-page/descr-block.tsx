import React from 'react'
import { Item } from '../../types'

interface IDescriptionBlock {
  item: Item
}

const DescriptionBlock: React.FC<IDescriptionBlock> = (props) => {
  return (
    <section className="description-block">
      <ul className="description-block__img-list">
        <li>
          <div className="info-marker">
          <span className="info-marker__text">
            Закажите консультацию у специалиста, чтобы узнать подходить этот крем для вас!
          </span>
          </div>
        <img src={props.item.image_link} 
        width="439"  height="439" alt="description-img" />
        </li>
        <li>
        <img src={props.item.image_link} 
        width="209"  height="209" alt="description-small-img" />
        </li>
      </ul>
      <div className="border-wrapper">
        <div className="description-block__specification-product description-block--before-desc">
          <strong className="specification-product__slogan">{props.item.name}</strong>
          <div>
            <p className="specification-product__specification">
              {props.item.category}
            </p>
            <p className="specification-product__specification">
              {props.item.description}
            </p>
          </div>
        </div>
        <div className="description-block__application description-block--before-desc">
          <ol className="application__list">
          <li>
              <h4 className="application__use-title">
                Бренд
              </h4>
              <p className="application__mode-use">
                {props.item.brand}
              </p>
            </li>
            <li>
              <h4 className="application__use-title">
                Тип продукта
              </h4>
              <p className="application__mode-use">
                {props.item.product_type}
              </p>
            </li>
            <li>
              <h4 className="application__use-title">
                Рейтинг
              </h4>
              <p className="application__mode-use">
              <div className="stars-rating">
              <svg className="stars-rating__svg" width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <use xlinkHref="#empty-star" />
                  <use x="24px" xlinkHref="#empty-star" />
                  <use x="48px" xlinkHref="#empty-star" />
                  <use x="72px"xlinkHref="#empty-star" />
                  <use x="96px" xlinkHref="#empty-star" />
                  <rect width={props.item.rating / 0.05 + '%'} height="100%" fill='#EC8453'  mask="url(#star-mask)"/>
                </g>
              </svg>
            </div>
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}

export default DescriptionBlock