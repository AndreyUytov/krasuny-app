import React, {useState, useEffect} from 'react'
import {Items, MAX_ITEMS_PER_PAGE, TAG_LIST} from './../../types'

interface PropsForPagination {
  items: Items[]
  currentPage: number,
  setCurrentPage: (page: number) => void
}

function createPageArr (currentPage:number, maxPage: number): number[] {
  if (currentPage <= 2 && currentPage < maxPage) {
    return [1, 2, 3]
  } else {
    return [currentPage - 1, currentPage, currentPage + 1]
  }
}

const paginationLink = (arrPages: number[], currentPage: number, setCurrentPage: (page: number) => void) => {
  return arrPages.map((elem, i) => {
    return (
      <li key = {i}>
        <button type='button'
         className = {currentPage === elem ? 'pagination__link pagination__link--active' : 'pagination__link'}
          onClick = {() => setCurrentPage(elem)}  >
          {elem}
        </button>
      </li>
    )
  })
}

const PaginationBlock: React.FC<PropsForPagination> = ({currentPage, setCurrentPage}) => {


  const [maxPage, setMaxPage] = useState(Math.ceil(items.length / MAX_ITEMS_PER_PAGE))
  const [arrPages, setArrPages] = useState(createPageArr(currentPage, maxPage))

  return (
    <>
      {
        maxPage === 1 ? (<section className="pagination-block"></section>)  
        : <section className="pagination-block">
          <ul className="pagination-block__pagination-list">
            <li>
              <button type="button" className="pagination__btn pagination__btn--prev btn" disabled = {arrPages[0] < 2 ? true : false}
                onClick = {() => setArrPages(arrPages.map((elem) => elem - 1))}  >
                Назад
              </button>
            </li>
            {paginationLink(arrPages, currentPage, setCurrentPage)}
            <li>
              <button type="button" className="pagination__btn pagination__btn--next btn" disabled = {arrPages[2] === maxPage ? true : false}
                onClick = {() => setArrPages(arrPages.map((elem) => elem + 1))}  >
                Вперед
              </button>
            </li>
          </ul>
       </section> 
      }
    </>
  )
}

export default PaginationBlock