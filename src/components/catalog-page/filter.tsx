import React, { useState } from 'react'
import { BrandsList, BRANDS, MIN_DELTA_PRICE } from '../../types'

interface IFilterCatalogPage {
  brand: BrandsList | undefined
}

const FilterCatalogPage: React.FC<IFilterCatalogPage> = ({brand}) => {

  const [checkedBrand, setCheckedBrand] = useState<BrandsList | undefined>(brand)
  const [minTooglePosition, setMinTooglePosition] = useState(10)
  const [maxTooglePosition, setMaxTooglePosition] = useState(10)
  const [valueMinPrice, setValueMinPrice] = useState(10)
  const [valueMaxPrice, setValueMaxPrice] = useState(90)

  const onMinInputChange = (value: number) => {
    if (value <= valueMaxPrice - MIN_DELTA_PRICE) {
      setMinTooglePosition(value)
    } else if (value >= valueMaxPrice) {
      alert(`Минимальная цена не может быть больше или равной максимальной`)
      setMaxTooglePosition(100 - value)
      setValueMaxPrice(value)
      setMinTooglePosition(value - MIN_DELTA_PRICE)
      setValueMinPrice(value - MIN_DELTA_PRICE)
    } else {
      alert(`Дельта диапозона цен должна быть не менее ${MIN_DELTA_PRICE} единиц`)
      setMinTooglePosition(valueMaxPrice - MIN_DELTA_PRICE)
      setValueMinPrice(valueMaxPrice - MIN_DELTA_PRICE)
    }
  }

  const onMaxInputChange = (value: number) => {
    if (value >= valueMinPrice + MIN_DELTA_PRICE) {
      setMaxTooglePosition(100 - value)
    } else if (value <= valueMinPrice) {
      alert (`Максимальная цена диапазона не может быть меньше или равной минимальной`)
      setMinTooglePosition(value)
      setValueMinPrice(value)
      setMaxTooglePosition(100 - (value + MIN_DELTA_PRICE))
      setValueMaxPrice(value + MIN_DELTA_PRICE)
    } else {
      alert(`Дельта диапозона цен должна быть не менее ${MIN_DELTA_PRICE} единиц`)
      setMaxTooglePosition(100 - (valueMinPrice + MIN_DELTA_PRICE))
      setValueMaxPrice(valueMinPrice + MIN_DELTA_PRICE)
    }
  }


  return (
    <section className = "filter-block">
      <h2 className="filter-block__title">
        Фильтр
      </h2>
      <form className="filter-block__filter-form filter-form">
        <fieldset className="filter-form__price filter-form__fieldset">
          <div className="filter-form__price-top-wrapper">
            <legend className="filter-form__legend">Цена</legend>
          </div>
          <div className="wrapper-price-range">
            <div className="price-range__scale">
              <div className="price-range__bar" style={{left: `${minTooglePosition}%`, right: `${maxTooglePosition}%`}} >
                <div className="price-range__toggle price-range__toggle--min"></div>
                <div className="price-range__toggle price-range__toggle--max"></div>
              </div>
            </div>
            <div className="wrapper-price-input">
              <label className="filter-form__label">
                <span className="visually-hidden">min price</span>
                <input className="filter-form__input" type="text" value={valueMinPrice} onChange = {(evt) => {setValueMinPrice(+evt.currentTarget.value)}} onBlur = {(evt) => onMinInputChange(+evt.currentTarget.value)} />
              </label>
              <label className="filter-form__label">
                <span className="visually-hidden">max price</span>
                <input className="filter-form__input" type="text" value={valueMaxPrice} onChange = {(evt) => setValueMaxPrice(+evt.currentTarget.value)} onBlur = {(evt) => onMaxInputChange(+evt.currentTarget.value)} />
              </label>
            </div>
          </div>
        </fieldset>
        
        <fieldset className="filter-form__fieldset filter-form__fieldset--brands">
          <legend className="filter-form__legend">Брэнд</legend>
          {BRANDS.map((elem, i) => {
            return (
              <label key={i} className="filter-form__label filter-form__label--brands">
                <input className="visually-hidden" type="radio" name="care-radio" onClick = {() => setCheckedBrand(elem)} checked = {elem === checkedBrand} />
                <span className="filter-form__radio radio"></span> {elem}
              </label>
            )
          })}
        </fieldset>
        <button type="submit" className="filter-form__submit-btn btn-fon">Применить фильтры</button>
        <button type="reset" className="filter-form__btn btn">Сбросить фильтры</button>
      </form>
    </section>
  )
}

export default FilterCatalogPage