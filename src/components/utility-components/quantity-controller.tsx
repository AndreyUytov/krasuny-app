import React from 'react'

const QuantityController: React.FC<{count: number, setCount: (count:number)=>void, isDisableCount: boolean}> = ({count, setCount, isDisableCount}) => {

  const downCount = () => {
    if(count > 1) {
      setCount(count - 1)
    } else {
      setCount(1)
      alert(`Количество товара не может быть меньше 1`)
    }
  }

  return (
    <div className="order-card__btns-column">
      <button className="order-card__down-snap order-card__snap snap" type="button" onClick={downCount} disabled = {isDisableCount} >
        <span className="visually-hidden">Уменьшить количество товара</span>
      </button>
      <p className="order-card__amount-product"> {count} </p>
      <button className="order-card__up-snap order-card__snap snap" type="button" onClick={()=> setCount(count + 1)} disabled = {isDisableCount} >
        <span className="visually-hidden">Увеличить количество товара</span>
      </button>
    </div>
  )
}

export default QuantityController