import { combineReducers } from 'redux'

import {
  PRODUCT_TYPE,
  TAG_LIST,
  FilterActionType,
  SET_FILTER_BY_TAGS,
  RESET_FILTER_BY_TAGS,
  NumberPageActionType,
  SET_CURRENT_PAGE,
  RESET_CURRENT_PAGE,
  REQUEST_ITEMS,
  SUCCESS_ITEMS,
  ItemsActionType,
  FAILURE_ITEMS,
  Item,
  SuccessItemsAction,
  SET_FILTER_BY_PRODUCT_TYPE,
  DELETE_FILTER_BY_TAGS,
  SELECTION,
  SET_FILTER_BY_SELECTION,
  RESET_FILTER_BY_SELECTION,
  BrandsList
  } from './../types'
import { indexById } from '../selectors'

export interface ItemsByFiltersInterface {
  [propName: string]: ItemsIdInterface
}

function itemsByFilters (
  state: ItemsByFiltersInterface = {}, action: ItemsActionType
  ) {
    switch (action.type) {
      case REQUEST_ITEMS:
      case SUCCESS_ITEMS:
      case FAILURE_ITEMS: 
        return {
          ...state,
          [action.query]: itemsId(state[action.query], action)  
        }
      default:
        return state
    }
  }

interface AllItemsState {
  [propName: number]: Item
}

function allItems (state:AllItemsState = {}, action: SuccessItemsAction) {
  switch (action.type) {
    case SUCCESS_ITEMS:
      return {
        ...state, ...indexById(action.items)
      }
    default:
      return state
  }
}

interface ItemsIdInterface {
  isFetching: boolean,
  isFailure: boolean,
  itemsId: number [],
  err: TypeError | undefined
}

function itemsId (
  state:ItemsIdInterface = {
    isFetching: false,
    isFailure: false,
    itemsId: [],
    err: undefined
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
          isFailure: true,
          err: action.error
        }
      default: 
        return state
    }
  }



interface FilterInterface {
  selectedTags: TAG_LIST[],
  selectedProductType: PRODUCT_TYPE,
  selectedSelection: SELECTION | undefined,
  selectedBrand: BrandsList | undefined
}

function filters (state:FilterInterface = {selectedTags: [], selectedProductType: PRODUCT_TYPE.blush, selectedSelection: undefined, selectedBrand: undefined},
  action: FilterActionType
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
      case SET_FILTER_BY_PRODUCT_TYPE:
        return {
          ...state,
          selectedProductType: action.product_type
        }
      case DELETE_FILTER_BY_TAGS:
        return {
          ...state,
          selectedTags: state.selectedTags.reduce((result: TAG_LIST[], current) => {
            if (current !== action.removedTag) {
               result.push(current)
            }
            return result
          },[])
        }
      case SET_FILTER_BY_SELECTION:
        return {
          ...state,
          selectedSelection: action.selection
        }
      case RESET_FILTER_BY_SELECTION:
        return {
          ...state,
          selectedSelection: undefined
        }
      default:
        return state
    }
}

interface NumberPage {
  page: number
}

function pagination (state: NumberPage = {page: 1}, action: NumberPageActionType) {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        page: action.page
      }
    case RESET_CURRENT_PAGE:
      return {
        ...state,
        page: 1
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  filters,
  pagination,
  allItems,
  itemsByFilters
})

export type RootState = ReturnType<typeof rootReducer>

export {rootReducer}