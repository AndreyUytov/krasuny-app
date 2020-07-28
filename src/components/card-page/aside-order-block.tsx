import React from 'react'
import { Item } from '../../types'

interface IAsideOrderBlock {
  item: Item,
  marginContainer: number
}

const AsideOrderBlock: React.FC<IAsideOrderBlock> = (props) => {
  return (
    <section className="aside-order-block">
        <div className="sticky-block" style = {{width: 450 + props.marginContainer + 'px' }}>
          <div className="inner-wrapper__sticky">
            <div className="order-card__top-row">
              <div className="order-card__ishere-marker">В наличии</div>
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
            <h3 className="order-card__title">{props.item.name}</h3>
            <p className="order-card__price"> {props.item.price} {props.item.price_sign} </p>
            <div className="order-card__controls-row">
              <div className="order-card__btns-column">
                <button className="order-card__down-snap order-card__snap snap" type="button">
                  <span className="visually-hidden">Уменьшить количество товара</span>
                </button>
                <p className="order-card__amount-product">1</p>
                <button className="order-card__up-snap order-card__snap snap" type="button">
                  <span className="visually-hidden">Увеличить количество товара</span>
                </button>
              </div>
              <div className="order-card__order-column">
                <button className="order-card__favorite-snap order-card__snap snap" type="button">
                  <span className="visually-hidden">
                    Добавить в избранное
                  </span>
                </button>
                <button className="order-card__btn btn-fon" type="button">
                  В корзину
                </button>
              </div>
            </div>
            <div className="order-card__tags">
              <h4 className="tags__title">Состав</h4>
              <ul className="tags__list">
                {
                  props.item.tag_list.map((elem, i) => {
                    return (
                      <li key={i}>
                        {elem}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className="order-card__brand">
              <h4 className="brand__title">Бренд</h4>
              <p className="brand__logo">
                <img src="../images/content/brand-logo.png" className="brand__logo-img "
                width="80" height="19" alt="brand-logo" />
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AsideOrderBlock