import React, { useState } from 'react'

import QuantityController from './../utility-components/quantity-controller'
import { addToFavorites, removeFromFavorites } from '../../action'
import { Item } from '../../types'

interface IOrderCardControlls {
  favoritesItems: number[],
  item: Item,
  addToFavorites: typeof addToFavorites,
  removeFromFavorites: typeof removeFromFavorites
}

const OrderCardControlls: React.FC<IOrderCardControlls> = ({favoritesItems, item, addToFavorites, removeFromFavorites}) => {

  const [count, setCount] = useState(1)

  return (
    <div className="order-card__controls-row">
      <QuantityController count={count} setCount={setCount} />
      <div className="order-card__order-column">
        <button className = {favoritesItems.includes(item.id) ?
           "order-card__favorite-snap--on order-card__snap snap" :
            "order-card__favorite-snap order-card__snap snap"} type="button"
            onClick = {favoritesItems.includes(item.id) ? () => removeFromFavorites(item.id) : () => addToFavorites(item.id)} >
          <span className="visually-hidden">
            Добавить в избранное
          </span>
        </button>
        <button className="order-card__btn btn-fon" type="button">
          В корзину
        </button>
      </div>
    </div>
  )
}

export default OrderCardControlls