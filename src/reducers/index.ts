import { combineReducers } from 'redux'

import {SELECT_PRODUCT_TYPE, SelectProductTypeAction, PRODUCT_TYPE} from './../types'

function store (state: string = 'this is store'): string {
  return state
}

function selectedProductType (state: PRODUCT_TYPE = PRODUCT_TYPE.blush, {type, page}: SelectProductTypeAction): PRODUCT_TYPE {
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