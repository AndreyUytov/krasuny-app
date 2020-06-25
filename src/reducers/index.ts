import { combineReducers } from 'redux'

import {SELECT_PRODUCT_TYPE,
  SelectProductTypeAction,
  GetItemsByProductTypeAction,
  PRODUCT_TYPE,
  GET_ITEMS_BY_PRODUCT_TYPE,
  Items,
  TAG_LIST,
  SelectFilterByTagsAction,
  SET_FILTER_BY_TAGS
  } from './../types'

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

function allItemsByProductType (
  state:allItemsInterface = {}, {type, page, items}: GetItemsByProductTypeAction
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

interface FilterInterface {
  tags: TAG_LIST[] | string[]
}

function filters (state:FilterInterface = {tags: []},
  {type, tags}: SelectFilterByTagsAction
  ) {
    switch (type) {
      case SET_FILTER_BY_TAGS:
        return {
          ...state,
          tags: tags
        }
      default:
        return state
    }
}

const rootReducer = combineReducers({
  selectedProductType,
  allItemsByProductType,
  filters
})

export type RootState = ReturnType<typeof rootReducer>

export {rootReducer}