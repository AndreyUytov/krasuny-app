import { combineReducers } from 'redux'

import {SELECT_PRODUCT_TYPE,
  SelectProductTypeAction,
  GetItemsByProductTypeAction,
  PRODUCT_TYPE,
  GET_ITEMS_BY_PRODUCT_TYPE,
  TAG_LIST,
  FilterByTagsActionType,
  SET_FILTER_BY_TAGS,
  RESET_FILTER_BY_TAGS,
  PaginationPageActionType,
  SET_PAGINATION_PAGE,
  RESET_PAGINATION_PAGE,
  REQUEST_ITEMS,
  SUCCESS_ITEMS,
  ItemsActionType,
  FAILURE_ITEMS,
  Item
  } from './../types'

function selectedProductType (state: PRODUCT_TYPE = PRODUCT_TYPE.blush, {type, productType}: SelectProductTypeAction): PRODUCT_TYPE {
  switch (type) {
    case SELECT_PRODUCT_TYPE:
      return productType
    default:
     return state
  }
}

interface allItemsInterface {
  [propname: string]: Item []
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

function itemsByFilters (
  state: allItemsInterface = {}, action: any
  ) {
    switch (action.type) {
      
    }
  }

interface ItemsIdInterface {
  isFetching: boolean,
  isFailure: boolean,
  itemsId: number []
}

function itemsId (
  state:ItemsIdInterface = {
    isFetching: false,
    isFailure: false,
    itemsId: []
  }, action: ItemsActionType
  ): ItemsIdInterface {
    switch (action.type) {
      case REQUEST_ITEMS:
        return {
          ...state, isFetching: true
        }
      case SUCCESS_ITEMS:
        return {
          ...state, isFetching: false, 
          itemsId: action.items.map(elem => elem.id)
        }
      case FAILURE_ITEMS:
        return {
          ...state, isFetching: false,
          isFailure: true
        }
      default: 
        return state
    }
  }



interface FilterInterface {
  selectedTags: TAG_LIST[],
  selectedProductType: PRODUCT_TYPE
}

function filters (state:FilterInterface = {selectedTags: [], selectedProductType: PRODUCT_TYPE.blush},
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

interface PaginationPage {
  page: number
}

function pagination (state: PaginationPage = {page: 1}, action: PaginationPageActionType) {
  switch (action.type) {
    case SET_PAGINATION_PAGE:
      return {
        ...state,
        page: action.page
      }
    case RESET_PAGINATION_PAGE:
      return {
        ...state,
        page: 1
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  selectedProductType,
  allItemsByProductType,
  filters,
  pagination
})

export type RootState = ReturnType<typeof rootReducer>

export {rootReducer}