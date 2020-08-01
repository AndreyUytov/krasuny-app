import React, { useState, useEffect} from 'react'

import { WIDTH_CARUSEL_ITEM, VISUAL_COUNT_CARUSEL_ITEM, Item, PRODUCT_TYPE } from '../../types'
import { fetchItemsIfNeeded } from '../../action'
import { ItemsByFiltersInterface } from '../../reducers'
import { getAllItems } from '../../selectors'
import { Link } from 'react-router-dom'

const SimilarList: React.FC<{fetchItemsIfNeeded: typeof fetchItemsIfNeeded, item: Item, itemsByFilters: ItemsByFiltersInterface, allItems: any}> = 
      ({fetchItemsIfNeeded, item, itemsByFilters, allItems}) => {

  const [sliderPosition, setSliderPosition] = useState(0)
  const [similarItems, setSimilarItems] = useState<Item[]>([])
  
  const caruselLength = similarItems.length

  useEffect(() => {
    let priceQuery = `&price_greater_than=0`
    let ratingQuery = item.rating + 1 <= 4.9 ? `&rating_greater_than=${item.rating + 1}` : `&rating_less_than${item.rating}` 
    let query = `.json?product_type=${item.product_type}` + priceQuery + ratingQuery
    let {itemsId, isFetching, isFailure, err} = itemsByFilters[query] || {itemsId: []}
    fetchItemsIfNeeded(query)
    let fetchingSimilarItems = getAllItems(itemsId, allItems).map((elem) => {
      if (elem.rating === null) {
        elem.rating = 0
       }
       return elem
    })
    setSimilarItems(fetchingSimilarItems)
  }, [allItems, item])

  const onPrevClickCarusel = () => {
    let shift = sliderPosition + WIDTH_CARUSEL_ITEM * VISUAL_COUNT_CARUSEL_ITEM
    setSliderPosition(Math.min(shift, 0))
  }
  const onNextClickCarusel = () => {
    let shift = sliderPosition - WIDTH_CARUSEL_ITEM * VISUAL_COUNT_CARUSEL_ITEM
    setSliderPosition(Math.max(shift, - WIDTH_CARUSEL_ITEM * (caruselLength - VISUAL_COUNT_CARUSEL_ITEM)))
  }

  return (
    <section className="similar-block container">
      <ul className="similar-block__slider" style = {{marginLeft: sliderPosition + 'px'}} >
        {
          similarItems.map((elem) => {
            return (
              <li key={elem.id} >
                <Link to = {`/${PRODUCT_TYPE[elem.product_type]}/${elem.id}`} className="popullar-card card">
                  <img className="popullar-card_img card__img"
                  src={elem.image_link} 
                  width="275" height="275"
                  alt="card pictur" />
                  <div className="card-description__wrapper">
                    <h3 className="card__title">
                      {elem.name.length > 20 ? `${elem.name.slice(0, 17)} ...` : elem.name}
                    </h3>
                    <p className="card__price price">
                      {elem.price} {elem.price_sign}
                    </p>
                  </div>
                </Link>
              </li>
            )
          })
        }
      </ul>
      <button className="slider-snap slider-prev-snap snap" type="button" onClick={onPrevClickCarusel}>
        <span className="visually-hidden">назад</span>
      </button>
      <button className="slider-snap slider-next-snap snap" type="button" onClick={onNextClickCarusel} >
        <span className="visually-hidden">вперед</span>
      </button>
    </section>

  )
}

export default SimilarList