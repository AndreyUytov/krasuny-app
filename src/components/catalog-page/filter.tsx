import React, { useState } from 'react'
import { BrandsList, BRANDS, MIN_DELTA_PRICE } from '../../types'

interface IFilterCatalogPage {
  brand: BrandsList | undefined
}

const FilterCatalogPage: React.FC<IFilterCatalogPage> = ({brand}) => {

  const [checkedBrand, setCheckedBrand] = useState<BrandsList | undefined>(brand)
  const [minTooglePosition, setMinTooglePosition] = useState(0)
  const [maxTooglePosition, setMaxTooglePosition] = useState(280)
  
  const onToogleMouseDown = (evt: React.MouseEvent<HTMLDivElement>, setTooglePosition: typeof setMinTooglePosition | typeof setMaxTooglePosition ) => {
    const toogle = evt.currentTarget
    const startUserCursorPosition = evt.clientX
    const startToogle = toogle.style.left
    const moveAt = (evt: any) => {
      setTooglePosition(parseInt(startToogle) + (evt.clientX - startUserCursorPosition))
    }
    document.addEventListener('mousemove', moveAt)
    document.onmouseup = () => {
      document.removeEventListener('mousemove', moveAt)
      toogle.onmouseup = null
    }
  }

  const checkMinTooglePosition = (value: number, setTooglePosition: typeof setMinTooglePosition) => {
    if (value < 0) {
      setTooglePosition(0)
      alert(`Минимальное значение цены не может быть отрицательным`)
    } else if (value > maxTooglePosition - MIN_DELTA_PRICE) {
      setTooglePosition(maxTooglePosition - MIN_DELTA_PRICE)
      alert(`Минимальная разница между максимальной и минимальной значениями цены не может быть меньше ${MIN_DELTA_PRICE}`)
    } else {
      setTooglePosition(value)
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
              <div className="price-range__bar" style={{width: `${maxTooglePosition - minTooglePosition}px`, left:`${minTooglePosition}px`}} ></div>
              <div className="price-range__toggle price-range__toggle--min" style={{left: `${minTooglePosition}px`}} onMouseDown = {(evt)=> onToogleMouseDown(evt, setMinTooglePosition)} ></div>
              <div className="price-range__toggle price-range__toggle--max"  style={{left: `${maxTooglePosition}px`}}  onMouseDown = {(evt) => onToogleMouseDown(evt, setMaxTooglePosition)}></div>
            </div>
            <div className="wrapper-price-input">
              <label className="filter-form__label">
                <span className="visually-hidden">min price</span>
                <input className="filter-form__input" type="text" value={Math.round(minTooglePosition/2.8)} onChange = {(evt) => {setMinTooglePosition(+evt.currentTarget.value * 2.8)}} />
              </label>
              <label className="filter-form__label">
                <span className="visually-hidden">max price</span>
                <input className="filter-form__input" type="text" value={Math.round(maxTooglePosition/2.8)} onChange = {(evt) => setMaxTooglePosition(+evt.currentTarget.value * 2.8)} />
              </label>
            </div>
          </div>
        </fieldset>
        
        <fieldset className="filter-form__fieldset filter-form__fieldset--brands">
          <legend className="filter-form__legend">Брэнд</legend>
            <label key={'default'} className="filter-form__label filter-form__label--brands">
              <input className="visually-hidden" type="radio" name="care-radio" onClick = {() => setCheckedBrand(undefined)} checked = {undefined === checkedBrand} />
              <span className="filter-form__radio radio"></span> Все брэнды
            </label>
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