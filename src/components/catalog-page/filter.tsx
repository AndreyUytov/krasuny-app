import React from 'react'
import { TAG_LIST, PRODUCT_TYPE } from '../../types'

interface IFilterCatalogPage {
  tags: TAG_LIST[],
  product_type: PRODUCT_TYPE
}

const FilterCatalogPage: React.FC<IFilterCatalogPage> = ({tags, product_type}) => {
  return (
    <section className = "filter-block">
      Тэги: {tags}
      Тип продукта: {product_type} 
    </section>
  )
}

export default FilterCatalogPage