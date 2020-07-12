import React from 'react'

import {TAG_LIST} from '../../types'

interface TagListInterface {
  tags: TAG_LIST[],
  deleteFilterByTags: (tag: TAG_LIST) => void
}

const TagsList:React.FC<TagListInterface> = ({tags, deleteFilterByTags}) => {
  return (
    <>
      <ul className="production-list-block__tags-list">
        {
          tags.map((elem, i) => {
            return (
              <li key={i} className="tags-list__item">
                {elem}
                <button type="button" className="tags-list__close-snap snap" onClick = {() => deleteFilterByTags(elem)}  >
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