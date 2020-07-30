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
  BrandsList,
  SET_FILTER_BY_PRICE_AND_BRAND,
  RESET_FILTER_BY_PRICE_AND_BRAND,
  SUCCESS_ITEM,
  REQUEST_ITEM,
  FetchItemById,
  FAILURE_ITEM,
  FavoritesAction,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  BasketAction,
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET
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

function itemsByFavorites (state: number [] = [], action: FavoritesAction) {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return [...state, action.id]
    case REMOVE_FROM_FAVORITES:
      return state.reduce((result: number [], current) => {
        if (current !== action.id) {
          result.push(current)
        } 
        return result
      }, [])
    default:
      return state
  }
}

function itemsByBasket (state: {id: number, count: number}[] = [], action: BasketAction) {
  switch (action.type) {
    case ADD_TO_BASKET:
      return [...state, action.id]
    case REMOVE_FROM_BASKET:
      return state.reduce((result: {id: number, count: number}[], current) => {
        if(current.id !== action.id) {
          result.push(current)
        }
        return result
      }, [])
  }
}

interface AllItemsState {
  [propName: number]: Item
}

function allItems (state:AllItemsState = {}, action: SuccessItemsAction | FetchItemById) {
  switch (action.type) {
    case SUCCESS_ITEMS:
      return {
        ...state, ...indexById(action.items)
      }
    case REQUEST_ITEM:
      return {
        ...state, [action.id]: undefined
      }
    case SUCCESS_ITEM:
      return {
        ...state, [action.id]: action.item
      }
    case FAILURE_ITEM:
      return {
        ...state, [action.id]: action.error
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
  selectedBrand: BrandsList | undefined,
  selectedMinPrice: number | undefined,
  selectedMaxPrice: number | undefined
}

function filters (state:FilterInterface = {
  selectedTags: [],
  selectedProductType: PRODUCT_TYPE.blush,
  selectedSelection: undefined,
  selectedBrand: undefined,
  selectedMinPrice: undefined,
  selectedMaxPrice: undefined
},
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
      case SET_FILTER_BY_PRICE_AND_BRAND: 
        return {
          ...state,
          selectedMinPrice: action.minPrice,
          selectedMaxPrice: action.maxPrice,
          selectedBrand: action.brand
        }
      case RESET_FILTER_BY_PRICE_AND_BRAND:
        return {
          ...state,
          selectedBrand: undefined,
          selectedMaxPrice: undefined,
          selectedMinPrice: undefined
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
  itemsByFilters,
  itemsByFavorites,
  itemsByBasket
})

export type RootState = ReturnType<typeof rootReducer>

export {rootReducer}