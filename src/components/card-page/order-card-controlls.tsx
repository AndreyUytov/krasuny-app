import React, { useState } from 'react'

import QuantityController from './../utility-components/quantity-controller'

const OrderCardControlls: React.FC = () => {

  const [count, setCount] = useState(1)

  return (
    <div className="order-card__controls-row">
      <QuantityController count={count} setCount={setCount} />
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
  )
}

export default OrderCardControlls