import React from 'react'
import './'

const SelectFilterBlock:React.FC = () => {
  return(
    <form className="production-list-block__select-form">
      <div className="__select" data-state="">
        <div className="__select__title" data-default="select">Сортировка по</div>
        <div className="__select__content">
          <input id="rating-select" className="__select__input" value="rating" type="radio" name="singleSelect" checked/>
          <label htmlFor="rating-select" className="__select__label">По рейтингу</label>
          <input id="rating-select" className="__select__input" value="rating" type="radio" name="singleSelect"/>
          <label htmlFor="rating-select" className="__select__label">По рейтингу</label>
          <input id="price-select" className="__select__input" value="price" type="radio" name="singleSelect" />
          <label htmlFor="price-select" className="__select__label">По цене</label>
        </div>
      </div>
    </form>
  )
}