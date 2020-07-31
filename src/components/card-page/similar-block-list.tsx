import React, { useState} from 'react'
import { WIDTH_CARUSEL_ITEM, VISUAL_COUNT_CARUSEL_ITEM } from '../../types'

const SimilarList: React.FC = () => {

  const [sliderPosition, setSliderPosition] = useState(0)
  const caruselLength = 10

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
        <li>
          <a className="popullar-card card">
            <img className="card__img"
             src="./../images/content/popular-product-card.png" 
             width="275" height="275"
             alt="card pictur" />
             <div className="card-description__wrapper">
               <h3 className="card__title">
                Piruvic40 solution Medicare Proffessional
               </h3>
               <p className="card__price price">
                1 грн.
               </p>
             </div>
          </a>
        </li>
        <li>
          <a className="popullar-card card card--hit">
            <img className="card__img"
             src="./../images/content/popular-product-card2.png" 
             width="275" height="275"
             alt="card pictur" />
             <div className="card-description__wrapper">
               <h3 className="card__title">
                Dr.Hedison Premium Skin Care Returning Eye Patch.
               </h3>
               <p className="card__price price">
                2 грн.
               </p>
             </div>
          </a>
        </li>
        <li>
          <a className="popullar-card card card--present">
            <img className="card__img"
             src="./../images/content/popular-product-card3.png" 
             width="275" height="275"
             alt="card pictur" />
             <div className="card-description__wrapper">
               <h3 className="card__title">
                Carboxy CO2 Lamic Cosmetici
               </h3>
               <p className="card__price price">
                3 грн.
               </p>
             </div>
          </a>
        </li>
        <li>
          <a className="popullar-card card card--hit">
            <img className="card__img"
             src="./../images/content/popular-product-card4.png" 
             width="275" height="275"
             alt="card pictur" />
             <div className="card-description__wrapper">
               <h3 className="card__title">
                ТСА 10% DAY Peel 10% ТСА Dermagenetic
               </h3>
               <p className="card__price price">
                4 грн.
               </p>
             </div>
          </a>
        </li>
        <li>
          <a className="popullar-card card card--new">
            <img className="card__img"
             src="./../images/content/popular-product-card5.png" 
             width="275" height="275"
             alt="card pictur" />
             <div className="card-description__wrapper">
               <h3 className="card__title">
                lios SPF 50 3in1 UVA/UVB Dermagenetic
               </h3>
               <p className="card__price price">
                5 грн.
               </p>
             </div>
          </a>
        </li>
        <li>
          <a className="popullar-card card card--new">
            <img className="card__img"
             src="./../images/content/popular-product-card6.png" 
             width="275" height="275"
             alt="card pictur" />
             <div className="card-description__wrapper">
               <h3 className="card__title">
                MELANOSTOP CREAM Bellеzza
               </h3>
               <p className="card__price price price--discount">
                6 грн.
               </p>
             </div>
          </a>
        </li>
        <li>
          <a className="popullar-card card">
            <img className="card__img"
             src="./../images/content/popular-product-card.png" 
             width="275" height="275"
             alt="card pictur" />
             <div className="card-description__wrapper">
               <h3 className="card__title">
                Piruvic40 solution Medicare Proffessional
               </h3>
               <p className="card__price price">
                7 грн.
               </p>
             </div>
          </a>
        </li>
        <li>
          <a className="popullar-card card">
            <img className="card__img"
             src="./../images/content/popular-product-card.png" 
             width="275" height="275"
             alt="card pictur" />
             <div className="card-description__wrapper">
               <h3 className="card__title">
                Piruvic40 solution Medicare Proffessional
               </h3>
               <p className="card__price price">
                8 грн.
               </p>
             </div>
          </a>
        </li>
        <li>
          <a className="popullar-card card">
            <img className="card__img"
             src="./../images/content/popular-product-card.png" 
             width="275" height="275"
             alt="card pictur" />
             <div className="card-description__wrapper">
               <h3 className="card__title">
                Piruvic40 solution Medicare Proffessional
               </h3>
               <p className="card__price price">
                9 грн.
               </p>
             </div>
          </a>
        </li>
        <li>
          <a className="popullar-card card">
            <img className="card__img"
             src="./../images/content/popular-product-card.png" 
             width="275" height="275"
             alt="card pictur" />
             <div className="card-description__wrapper">
               <h3 className="card__title">
                Piruvic40 solution Medicare Proffessional
               </h3>
               <p className="card__price price">
                10 грн.
               </p>
             </div>
          </a>
        </li>
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