import { combineReducers } from 'redux'

import {SELECT_PRODUCT_TYPE,
  SelectProductTypeAction,
  GetItemsByProductTypeAction,
  PRODUCT_TYPE,
  GET_ITEMS_BY_PRODUCT_TYPE,
  Items,
  TAG_LIST,
  FilterByTagsActionType,
  SET_FILTER_BY_TAGS,
  RESET_FILTER_BY_TAGS
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
  selectedTags: TAG_LIST[]
}

function filters (state:FilterInterface = {selectedTags: []},
  action: FilterByTagsActionType
  ) {
    switch (action.type) {
      case SET_FILTER_BY_TAGS:
        return {
          ...state,
          selectedTags: action.selectedTags
        }
      case RESET_FILTER_BY_TAGS:
        return {
          ...state,
          selectedTags: []
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