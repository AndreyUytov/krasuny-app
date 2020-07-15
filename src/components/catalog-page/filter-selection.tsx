import React, {useRef, SyntheticEvent} from 'react'

import { SELECTION } from '../../types'
import {setFilterBySelection} from './../../action'


const SelectFilterBlock:React.FC<{selection: SELECTION | undefined, setFilterBySelection: typeof setFilterBySelection}> = (props) => {

  const selectSingleRef = useRef<HTMLDivElement>(null)
  const selectSingleTitleRef = useRef<HTMLDivElement>(null)

  const onSelectSingleTitleClick = () => {
    if ('active' === selectSingleRef.current?.getAttribute('data-state')) {
      selectSingleRef.current.setAttribute('data-state', '');
    } else {
      selectSingleRef.current?.setAttribute('data-state', 'active');
    }
  }

  const onSelectSingleLabelClick = (evt:SyntheticEvent, selection: SELECTION ) => {
    if (selectSingleTitleRef.current) {
      selectSingleTitleRef.current.textContent = evt.currentTarget.textContent
      props.setFilterBySelection(selection)
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
          <input id="rating-select" className="__select__input" value="default" type="radio" name="singleSelect" checked = {props.selection === undefined}/>
          <label htmlFor="rating-select" className="__select__label" >Сортировка по</label>
          <input id="rating-select" className="__select__input" value="rating" type="radio" name="singleSelect" checked = {props.selection === 'rating'}/>
          <label htmlFor="rating-select" className="__select__label" onClick = {(evt) => onSelectSingleLabelClick(evt, 'rating')} >По рейтингу</label>
          <input id="price-select" className="__select__input" value="price" type="radio" name="singleSelect" checked = {props.selection === 'price'} />
          <label htmlFor="price-select" className="__select__label" onClick = {(evt) => onSelectSingleLabelClick(evt, 'price')} >По цене</label>
        </div>
      </div>
    </form>
  )
}

export default SelectFilterBlock