import React, {useState, useEffect, SyntheticEvent} from 'react'
import { PRODUCT_TYPE, mapTagListToProductType, TAG_LIST } from '../../types'

interface PropsForList {
  tags: TAG_LIST[],
  selectTags: (tag: TAG_LIST) => void
}

const Listrender: React.FC<PropsForList> = ({tags, selectTags}) => {
  const onBtnToggle = (evt:SyntheticEvent, tag: TAG_LIST):void => {
    evt.currentTarget.classList.toggle('tag-search__snap--active')
    selectTags(tag)
  }
  return (
    <ul className='tag-popup__list'>
      {
        tags.map((elem, i) => {
          return (
            <li key={i} className='tag-popup__item'>
              <button type='button' className='snap tag-search__snap'
               onClick={(evt) => onBtnToggle(evt, elem)}>
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
  hideTagPopup: ()=>void,
  activelink: PRODUCT_TYPE
}

const TagPopup: React.FC<Props> = ({hideTagPopup, activelink}) => {

  const tags = mapTagListToProductType[activelink]

  const [sortTags, setSortTags] = useState(tags)

  const [searchValue, setSearchValue] = useState('')

  const [selectedTags, setSelectedTags] = useState<TAG_LIST[] | string[]>([])

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
      {console.log(selectedTags)}
      <div className='tag-popup__wrapper'>
        <button type='button' className='snap tag-close__snap' onClick={hideTagPopup}>
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
        <Listrender tags={sortTags} selectTags = {selectTags}/>
        <div className='tag-button-wrapper'>
          <button type='button' className='btn tag-button'>Отмена</button>
          <button type='button' className='btn-fon tag-button'>Применить</button>
        </div>
      </div>
    </div>
  )
}

export default TagPopup