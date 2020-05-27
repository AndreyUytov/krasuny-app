import React from 'react'
import {Link} from 'react-router-dom'

import {PAGEMAP, PRODUCT_TYPE} from './../../types'

interface Props {
  activelink: PRODUCT_TYPE
}

const ListBlock: React.FC<Props> = ({activelink}) => {
  return (
    <section className = "production-list-block">
      <h2 className = "production-list-block__title">
        {PAGEMAP[activelink]}
      </h2>
    </section>
  )
}

export default ListBlock