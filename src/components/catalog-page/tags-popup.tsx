import React from 'react'

const TagsPopup: React.FC = () => {
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
            value={searchValue} onChange = {(evt)=> onSearchChange(evt.target.value)} />
          <button type='button' className='tag-search__submit-snap snap'onClick={filterTags}>
            <span className='visually-hidden'>
              Выполнить поиск
            </span>
          </button>
        </form>
        <ul className='tag-popup__list'>
          <li key={i} className='tag-popup__item'>
            <button type='button' className = {selectedTags.includes(elem) ? 'snap tag-search__snap tag-search__snap--active' : 'snap tag-search__snap'}
            onClick={() => onBtnToggle(elem)}>
              {elem}
            </button>
          </li>
        </ul>
        <div className='tag-button-wrapper'>
          <button type='button' className='btn tag-button' 
            onClick = {() => {setSelectedTags([]); props.resetFilterByTags()}}  >
            Отмена
          </button>
          <button type='button' className='btn-fon tag-button' onClick = {() => {props.setSelectedTags(selectedTags); hideTagPopup()}} >
            Применить
          </button>
        </div>
      </div>
    </div>
  )
}