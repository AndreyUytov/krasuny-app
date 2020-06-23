import React from 'react'

import {Items} from './../../types'

interface PropsForPagination {
  items: Items[],
  maxPage: number
}

function createPageArr (page:number): number[] {
  if (page <= 2) {
    return [1, 2, 3]
  } else return [page - 1, page, page + 1]
}

const PaginationBlock: React.FC<PropsForPagination> = ({items, maxPage}) => {

  return (
    <>
      {
        maxPage === 1 ? null : 
        <section className="pagination-block">
          <ul className="pagination-block__pagination-list">
            <li>
              <button type="button" className="pagination__btn pagination__btn--prev btn" disabled>
                Назад
              </button>
            </li>
            <li>
              <button type='button' className="pagination__link pagination__link--active">1</button>
            </li>
            <li>
              <button type='button' className="pagination__link">2</button>
            </li>
            <li>
              <button type='button' className="pagination__link">3</button>
            </li>
            <li>
              <button type="button" className="pagination__btn pagination__btn--next btn">
                Вперед
              </button>
            </li>
          </ul>
       </section> 
      }
    </>
  )
}