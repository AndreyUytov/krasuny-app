import { combineReducers } from 'redux'

import {SELECT_PRODUCT_TYPE, SelectPageAction} from './../types'

function store (state: string = 'this is store'): string {
  return state
}

function selectedProductType (state: string, {type, page}: SelectPageAction): string {
  switch (type) {
    case SELECT_PRODUCT_TYPE:
      return page
    default:
     return state
  }
}

const rootReducer = combineReducers({
  store,
  selectedProductType
})

export type RootState = ReturnType<typeof rootReducer>

export {rootReducer}