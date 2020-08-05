import React from 'react'
import { Link } from 'react-router-dom'
import { PAGEMAP, PRODUCT_TYPE } from '../../types'

const CatalogBlock: React.FC = () => {
  return (
    <section className="catalog-block container">
      <div className="catalog-block__description">
        <h2 className="catalog-block__title">
          Категории
        </h2>
        <span className="catalog-block__slogan">
          Современные технологии и лучшие традиции классической косметологии на службе вашей красоты и здоровья.
        </span>
      </div>
      <ul className="catalog-block__list" onClick = {() => document.documentElement.scrollTop = 0}>
        <li className="catalog-block__list-item catalog-block__list-item--one">
          <Link to = {`/catalog/${PRODUCT_TYPE.blush}`} className="link">{PAGEMAP.blush}</Link>
        </li>
        <li className="catalog-block__list-item catalog-block__list-item--five">
          <Link to = {`/catalog/${PRODUCT_TYPE.bronzer}`} className="link">{PAGEMAP.bronzer}</Link>
        </li>
        <li className="catalog-block__list-item catalog-block__list-item--nine">
          <Link to = {`/catalog/${PRODUCT_TYPE.eyebrow}`} className="link">{PAGEMAP.eyebrow}</Link>
        </li>
        <li className="catalog-block__list-item catalog-block__list-item--two">
          <Link to = {`/catalog/${PRODUCT_TYPE.eyeliner}`} className="link">{PAGEMAP.eyeliner}</Link>
        </li>
        <li className="catalog-block__list-item catalog-block__list-item--six">
          <Link to = {`/catalog/${PRODUCT_TYPE.eyeshadow}`} className="link">{PAGEMAP.eyeshadow}</Link>
        </li>
        <li className="catalog-block__list-item catalog-block__list-item--ten">
          <Link to = {`/catalog/${PRODUCT_TYPE.foundation}`} className="link">{PAGEMAP.foundation}</Link>
        </li>
        <li className="catalog-block__list-item catalog-block__list-item--three">
          <Link to = {`/catalog/${PRODUCT_TYPE.lip_liner}`} className="link">{PAGEMAP.lip_liner}</Link>
        </li>
        <li className="catalog-block__list-item catalog-block__list-item--seven">
          <Link to = {`/catalog/${PRODUCT_TYPE.lipstick}`} className="link">{PAGEMAP.lipstick}</Link>
        </li>
        <li className="catalog-block__list-item catalog-block__list-item--four">
          <Link to = {`/catalog/${PRODUCT_TYPE.mascara}`} className="link">{PAGEMAP.mascara}</Link>
        </li>
        <li className="catalog-block__list-item catalog-block__list-item--eight">
          <Link to = {`/catalog/${PRODUCT_TYPE.nail_polish}`} className="link">{PAGEMAP.nail_polish}</Link>
        </li>
      </ul>
    </section>
  )
}

export default CatalogBlock