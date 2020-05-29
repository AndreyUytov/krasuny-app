import React, {useState} from 'react'
import { PRODUCT_TYPE, mapTagListToProductType } from '../../types'

interface PropsForList {
  tags: string[]
}

const Listrender: React.FC<PropsForList> = ({tags}) => {
  return (
    <ul className='tag-popup__list'>
      {
        tags.map((elem, i) => {
          return (
            <li key={i} className='tag-popup__item'>
              <button type='button' className='snap tag-search__snap'>{elem}</button>
            </li>
          )
        })
      }
    </ul>)
}
interface Props {
  hideTagPopup: ()=>void,
  activelink: PRODUCT_TYPE
}

const TagPopup: React.FC<Props> = ({hideTagPopup, activelink}) => {

  const tags = mapTagListToProductType[activelink]

  const [sortTags, setSortTags] = useState(tags)

  const [searchValue, setSearchValue] = useState('')

  const filterTags = (arr: string[], reg: string) => {
    const regexp = new RegExp(reg, 'i')
    const result: string[] = []
    const anotherArr: string[] = []
    return arr.reduce((initial, item) => {
      if (regexp.test(item)) {
        initial.push(item)
      } else {
        anotherArr.push(item)
      }
      return [...result, ...anotherArr]
    }, result)
  }

  const onSearchChange = (value: string): string[] => {
    // Исправить! здесь не тот код!
    let delay = 300
    let timerId = setTimeout (function () {
      filterTags(sortTags, searchValue)
    })
  }

  return (
    <div className='tag-popup'>
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
           placeholder='Введите название компонента' 
            value={searchValue} onChange = {onSearchChange} />
          <button type='button' className='tag-search__submit-snap snap'>
            <span className='visually-hidden'>
              Выполнить поиск
            </span>
          </button>
        </form>
        <Listrender tags={tags} />
        <div className='tag-button-wrapper'>
          <button type='button' className='btn tag-button'>Отмена</button>
          <button type='button' className='btn-fon tag-button'>Применить</button>
        </div>
      </div>
    </div>
  )
}

export default TagPopup