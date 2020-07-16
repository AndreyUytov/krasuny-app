import React, {useRef, SyntheticEvent} from 'react'

import { SELECTION } from '../../types'
import {setFilterBySelection, resetCurrentPage} from './../../action'


const SelectFilterBlock:React.FC<{
  selection: SELECTION | undefined,
  setFilterBySelection: typeof setFilterBySelection,
  resetCurrentPage: typeof resetCurrentPage
}> = (props) => {

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
      props.resetCurrentPage()
    }
  }

  const onSelectionFormMouseLeave = () => {
    selectSingleRef.current?.setAttribute('data-state', '')
  }

  const renderTitleTextContent = () => {
    if (props.selection === 'rating') {
      return <>По рейтингу</>
    } else if (props.selection === 'price') {
      return <>По цене</>
    } else return <>Сортировка по </>
  }

  return(
    <form className="production-list-block__select-form" onMouseLeave = {onSelectionFormMouseLeave} >
      <div className="__select" data-state="" ref = {selectSingleRef}>
        <div className="__select__title" data-default="select" onClick = {onSelectSingleTitleClick} 
          ref = {selectSingleTitleRef} >{renderTitleTextContent()}</div>
        <div className="__select__content">
          <input id="rating-select" className="__select__input" value="default" type="radio" name="singleSelect" checked = {true}/>
          <label htmlFor="rating-select" className="__select__label" >Сортировка по</label>
          <input id="rating-select" className="__select__input" value="rating" type="radio" name="singleSelect" />
          <label htmlFor="rating-select" className="__select__label" onClick = {(evt) => onSelectSingleLabelClick(evt, 'rating')} >По рейтингу</label>
          <input id="price-select" className="__select__input" value="price" type="radio" name="singleSelect" />
          <label htmlFor="price-select" className="__select__label" onClick = {(evt) => onSelectSingleLabelClick(evt, 'price')} >По цене</label>
        </div>
      </div>
    </form>
  )
}

export default SelectFilterBlock