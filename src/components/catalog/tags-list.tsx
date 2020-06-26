import React from 'react'

import {TAG_LIST} from '../../types'

interface TagListInterface {
  selectedTags: TAG_LIST[],
  deleteTag: (tag: TAG_LIST) => void
}

const TagsList:React.FC<TagListInterface> = ({selectedTags, deleteTag}) => {
  return (
    <>
      <ul className="production-list-block__tags-list">
        {
          selectedTags.map((elem, i) => {
            return (
              <li key={i} className="tags-list__item">
                {elem}
                <button type="button" className="tags-list__close-snap snap" onClick = {() => deleteTag(elem)}  >
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