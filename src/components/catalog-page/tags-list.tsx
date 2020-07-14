import React from 'react'

import {TAG_LIST} from '../../types'
import {resetCurrentPage} from './../../action'

interface TagListInterface {
  tags: TAG_LIST[],
  deleteFilterByTags: (tag: TAG_LIST) => void,
  resetCurrentPage: typeof resetCurrentPage
}

const TagsList:React.FC<TagListInterface> = ({tags, deleteFilterByTags, resetCurrentPage}) => {
  const onDeleteTagClick = (elem: TAG_LIST) => {
    deleteFilterByTags(elem)
    resetCurrentPage()
  }
  return (
    <>
      <ul className="production-list-block__tags-list">
        {
          tags.map((elem, i) => {
            return (
              <li key={i} className="tags-list__item">
                {elem}
                <button type="button" className="tags-list__close-snap snap" onClick = {() => onDeleteTagClick(elem)}  >
                  <span className="visually-hidden">удалить тэг</span>
                </button>
            </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default TagsList