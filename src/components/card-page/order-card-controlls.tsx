import React, { useState } from 'react'

import QuantityController from './../utility-components/quantity-controller'
import { addToFavorites, removeFromFavorites, addToBasket } from '../../action'
import { Item } from '../../types'
import { Link } from 'react-router-dom'

interface IOrderCardControlls {
  basketItems: {id: number, count: number} []
  favoritesItems: number[],
  item: Item,
  addToFavorites: typeof addToFavorites,
  removeFromFavorites: typeof removeFromFavorites,
  addToBasket: typeof addToBasket
}

const OrderCardControlls: React.FC<IOrderCardControlls> = ({addToBasket, basketItems, favoritesItems, item, addToFavorites, removeFromFavorites}) => {

  const [count, setCount] = useState(1)
  const [isDisableCount, setIsDisableCount] = useState(!!basketItems.find((elem) => elem.id === item.id))

  return (
    <div className="order-card__controls-row">
      <QuantityController count={count} setCount={setCount} isDisableCount = {isDisableCount} />
      <div className="order-card__order-column">
        <button className = {favoritesItems.includes(item.id) ?
           "order-card__favorite-snap--on order-card__snap snap" :
            "order-card__favorite-snap order-card__snap snap"} type="button"
            onClick = {favoritesItems.includes(item.id) ? () => removeFromFavorites(item.id) : () => addToFavorites(item.id)} >
          <span className="visually-hidden">
            Добавить в избранное
          </span>
        </button>
        {
          basketItems.find((elem) => elem.id === item.id) ?
            <Link to = '/basket' className="order-card__btn btn-fon">Оформить</Link> :
            <button className="order-card__btn btn-fon" type="button" onClick = {() => {addToBasket(item.id, count); setIsDisableCount(true)}} >
              В корзину
            </button>
        }
      </div>
    </div>
  )
}

export default OrderCardControlls