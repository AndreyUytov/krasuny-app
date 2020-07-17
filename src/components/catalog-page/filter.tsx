import React, { useState } from 'react'
import { BrandsList, BRANDS } from '../../types'

interface IFilterCatalogPage {
  brand: BrandsList | undefined
}

const FilterCatalogPage: React.FC<IFilterCatalogPage> = ({brand}) => {

  const [checkedBrand, setCheckedBrand] = useState<BrandsList | undefined>(brand)

  return (
    <section className = "filter-block">
      <h2 className="filter-block__title">
        Фильтр
      </h2>
      <form className="filter-block__filter-form filter-form">
        <fieldset className="filter-form__price filter-form__fieldset">
          <div className="filter-form__price-top-wrapper">
            <legend className="filter-form__legend">Цена</legend>
            <label className="filter-form__label">
              <input className="visually-hidden" type="checkbox" name="price-check" />
              <span className="filter-form__checkbox checkbox"></span> Скидки
            </label>
          </div>
          <div className="wrapper-price-range">
            <div className="price-range__scale">
              <div className="price-range__bar">
                <div className="price-range__toggle price-range__toggle--min"></div>
                <div className="price-range__toggle price-range__toggle--max"></div>
              </div>
            </div>
            <div className="wrapper-price-input">
              <label className="filter-form__label">
                <span className="visually-hidden">min price</span>
                <input className="filter-form__input" type="text" value="930" />
              </label>
              <label className="filter-form__label">
                <span className="visually-hidden">max price</span>
                <input className="filter-form__input" type="text" value="25093" />
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