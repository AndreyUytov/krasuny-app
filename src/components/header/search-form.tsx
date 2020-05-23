import React, {useState, useRef, useEffect} from 'react'

const SearchForm: React.FC<{onCloseSnap: () => void, visibleForm: boolean}> = ({onCloseSnap, visibleForm}) => {

  const [inputValue, setInputValue] = useState <string | undefined> (undefined)

  const inputRef = useRef<HTMLInputElement>(null!)
  useEffect(() => {
    if (visibleForm) {
      inputRef.current.focus()
    }
  },[visibleForm])
  
  return (
    <form className="header-left-block__search-form">
      <div className="search-form__inner-wrapper">
        <button className="search-form__close-snap snap" type="button" onClick={onCloseSnap}>
          <span className="visually-hidden">
            Закрыть форму поиска
          </span>
        </button>
        <input className="search-form__input" type="search" ref={inputRef}
         value={inputValue} onChange={() => {setInputValue(inputValue)}}/>
      </div>
      <button className="search-form__submit-snap snap" type="submit">
        <span className="visually-hidden">
          Выполнить поиск
        </span>
      </button>
    </form>
  )
}

export default SearchForm;