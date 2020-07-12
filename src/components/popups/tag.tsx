import React, {useState} from 'react'
import { PRODUCT_TYPE, mapTagListToProductType, TAG_LIST } from '../../types'

import {
  setFilterByTags,
  resetFilterByTags
} from './../../action'

interface PropsForList {
  tagsForCurrentProductType: TAG_LIST[],
  selectTags: (tag: TAG_LIST) => void,
  selectedTags: TAG_LIST[],
}

const Listrender: React.FC<PropsForList> = ({tagsForCurrentProductType, selectTags, selectedTags}) => {
  const onBtnToggle = (tag: TAG_LIST):void => {
    if (selectedTags.length === 3 && !selectedTags.includes(tag)) {
      alert('Выберите не более 3-х тэгов!!!')
    } else {
      selectTags(tag)
    }
  }
  return (
    <ul className='tag-popup__list'>
      {
        tagsForCurrentProductType.map((elem, i) => {
          return (
            <li key={i} className='tag-popup__item'>
              <button type='button' className = {selectedTags.includes(elem) ? 'snap tag-search__snap tag-search__snap--active' : 'snap tag-search__snap'}
               onClick={() => onBtnToggle(elem)}>
                {elem}
              </button>
            </li>
          )
        })
      }
    </ul>
  )
}

interface Props {
  hideTagPopup: (bool: boolean) => void,
  product_type: PRODUCT_TYPE,
  tags: TAG_LIST[],
  setFilterByTags: typeof setFilterByTags,
  resetFilterByTags: typeof resetFilterByTags
}

const TagPopup: React.FC<Props> = (props) => {

  const {hideTagPopup, product_type, tags: tagsFromStore, resetFilterByTags, setFilterByTags} = props

  const tagsForCurrentProductType = mapTagListToProductType[product_type]

  const [sortTags, setSortTags] = useState(tagsForCurrentProductType)

  const [searchValue, setSearchValue] = useState('')

  const [selectedTags, setSelectedTags] = useState<TAG_LIST[]>(tagsFromStore)

  const filterTags = () => {
    const regexp = new RegExp(searchValue, 'i')
    const result: TAG_LIST[] = []
    const anotherArr: TAG_LIST[] = []
    sortTags.map((item) => {
      if (regexp.test(item)) {
        result.push(item)
      } else {
        anotherArr.push(item)
      }  
      return result
    })
    const resultArray = [...result, ...anotherArr]
    setSortTags(resultArray)
    setSearchValue('')
  }

  const onSearchChange = (text: string): void => {
    setSearchValue(text)
  }

  const selectTags = (tag: TAG_LIST): void => {
    const clone = [...selectedTags]
    const indexOfTag = clone.indexOf(tag)
    if (indexOfTag >= 0) {
      clone.splice(indexOfTag, 1)
      setSelectedTags(clone)
    } else if (indexOfTag < 0) {
      setSelectedTags([tag, ...clone])
    }
  }

  return (
    <div className='tag-popup'>
      <div className='tag-popup__wrapper'>
        <button type='button' className='snap tag-close__snap' onClick={() => hideTagPopup(false)}>
          <span className='visually-hidden'>Закрыть попап</span>
        </button>
        <h2 className='tag-popup__title'>
          Выберите тэги
        </h2>
        <form className='tag-form'>
          <label>
            Название компонента
          </label>
          <input id='tag-search' type='search' className='tag-search filter-form__text-input' 
            value={searchValue} onChange = {(evt)=> onSearchChange(evt.target.value)} />
          <button type='button' className='tag-search__submit-snap snap'onClick={filterTags}>
            <span className='visually-hidden'>
              Выполнить поиск
            </span>
          </button>
        </form>
        <Listrender {...props} tagsForCurrentProductType={sortTags} selectTags = {selectTags} selectedTags = {selectedTags} />
        <div className='tag-button-wrapper'>
          <button type='button' className='btn tag-button' 
            onClick = {() => {setSelectedTags([]); resetFilterByTags()}}  >
            Отмена
          </button>
          <button type='button' className='btn-fon tag-button' onClick = {() => {setSelectedTags(selectedTags); hideTagPopup(false); setFilterByTags(selectedTags)}} >
            Применить
          </button>
        </div>
      </div>
    </div>
  )
}

export default TagPopup