import React, {useRef, SyntheticEvent} from 'react'


const SelectFilterBlock:React.FC = () => {

  const selectSingleRef = useRef<HTMLDivElement>(null)
  const selectSingleTitleRef = useRef<HTMLDivElement>(null)

  const onSelectSingleTitleClick = () => {
    if ('active' === selectSingleRef.current?.getAttribute('data-state')) {
      selectSingleRef.current.setAttribute('data-state', '');
    } else {
      selectSingleRef.current?.setAttribute('data-state', 'active');
    }
  }

  const onSelectSingleLabelClick = (evt:SyntheticEvent) => {
    if (selectSingleTitleRef.current) {
      selectSingleTitleRef.current.textContent = evt.currentTarget.textContent
      selectSingleRef.current?.setAttribute('data-state', '')
    }
  }

  const onSelectionFormMouseLeave = () => {
    selectSingleRef.current?.setAttribute('data-state', '')
  }

  return(
    <form className="production-list-block__select-form" onMouseLeave = {onSelectionFormMouseLeave} >
      <div className="__select" data-state="" ref = {selectSingleRef}>
        <div className="__select__title" data-default="select" onClick = {onSelectSingleTitleClick} 
          ref = {selectSingleTitleRef}  >Сортировка по</div>
        <div className="__select__content">
          <input id="rating-select" className="__select__input" value="rating" type="radio" name="singleSelect" checked/>
          <label htmlFor="rating-select" className="__select__label" onClick = {onSelectSingleLabelClick} >По рейтингу</label>
          <input id="rating-select" className="__select__input" value="rating" type="radio" name="singleSelect"/>
          <label htmlFor="rating-select" className="__select__label" onClick = {onSelectSingleLabelClick} >По рейтингу</label>
          <input id="price-select" className="__select__input" value="price" type="radio" name="singleSelect" />
          <label htmlFor="price-select" className="__select__label" onClick = {onSelectSingleLabelClick} >По цене</label>
        </div>
      </div>
    </form>
  )
}

export default SelectFilterBlock