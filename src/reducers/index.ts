import { combineReducers } from 'redux'

import {SELECT_PRODUCT_TYPE,
  SelectProductTypeAction,
  GetItemsByProductTypeAction,
  PRODUCT_TYPE,
  GET_ITEMS_BY_PRODUCT_TYPE,
  Items
  } from './../types'

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

interface allItemsInterface {
  [propname: string]: Items[]
}

const initialItems: allItemsInterface = {}

function allItemsByProductType (
  state = initialItems, {type, page, items}: GetItemsByProductTypeAction
  ) {
    switch (type) {
      case GET_ITEMS_BY_PRODUCT_TYPE:
        return {
          ...state,
          [page]: items
        }
      default:
        return state
    }
  }

const rootReducer = combineReducers({
  store,
  selectedProductType,
  allItemsByProductType
})

export type RootState = ReturnType<typeof rootReducer>

export {rootReducer}