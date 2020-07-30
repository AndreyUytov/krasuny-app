import {
  PRODUCT_TYPE,
  TAG_LIST,
  SetFilterByTagsAction,
  SET_FILTER_BY_TAGS,
  DeleteFilterByTagsAction,
  DELETE_FILTER_BY_TAGS,
  RESET_FILTER_BY_TAGS,
  ResetFIlterByTagsAction,
  SET_CURRENT_PAGE,
  RESET_CURRENT_PAGE,
  ResetCurrentPageAction,
  SetCurrentPageAction,
  RequestItemsAction,
  REQUEST_ITEMS,
  SuccessItemsAction,
  SUCCESS_ITEMS,
  AppThunk,
  FailureItemsAction,
  FAILURE_ITEMS,
  Item,
  SET_FILTER_BY_PRODUCT_TYPE,
  SetFilterByProductTypeAction,
  SELECTION,
  SetFilterBySelectionAction,
  SET_FILTER_BY_SELECTION,
  ResetFilterBySelection,
  RESET_FILTER_BY_SELECTION,
  SetFIlterByPriceAndBrand,
  SET_FILTER_BY_PRICE_AND_BRAND,
  BrandsList,
  ResetFilterByPriceAndBrand,
  RESET_FILTER_BY_PRICE_AND_BRAND,
  RequestItemAction,
  REQUEST_ITEM,
  SUCCESS_ITEM,
  SuccessItemAction,
  FailureItemAction,
  FAILURE_ITEM,
  AddToFavoritesAction,
  ADD_TO_FAVORITES,
  RemoveFromFavoritesAction,
  REMOVE_FROM_FAVORITES,
  AddToBasketAction,
  ADD_TO_BASKET,
  RemoveFromBasketAction,
  REMOVE_FROM_BASKET
} from './../types'

import { ItemsByFiltersInterface } from './../reducers'

import {itemsApi} from './../api/api'

export function addToBasket (id: number): AddToBasketAction {
  return {
    type: ADD_TO_BASKET,
    id
  }
}

export function removeFromBasket (id: number): RemoveFromBasketAction {
  return {
    type: REMOVE_FROM_BASKET,
    id
  }
}

export function addToFavorites (id: number): AddToFavoritesAction {
  return {
    type: ADD_TO_FAVORITES,
    id
  }
}

export function removeFromFavorites (id: number): RemoveFromFavoritesAction {
  return {
    type: REMOVE_FROM_FAVORITES,
    id
  }
}

export function setFilterByPriceAndBrand (minPrice: number, maxPrice: number, brand: BrandsList | undefined): SetFIlterByPriceAndBrand {
  return {
    type: SET_FILTER_BY_PRICE_AND_BRAND,
    minPrice,
    maxPrice,
    brand
  }
}

export function resetFilterByPriceAndBrand (): ResetFilterByPriceAndBrand {
  return {
    type: RESET_FILTER_BY_PRICE_AND_BRAND
  }
}

export function setFilterBySelection (selection: SELECTION): SetFilterBySelectionAction {
  return {
    type: SET_FILTER_BY_SELECTION,
    selection
  }
}

export function resetFilterBySelection (): ResetFilterBySelection {
  return {
    type: RESET_FILTER_BY_SELECTION
  }
}

export function setCurrentPage (page: number): SetCurrentPageAction {
  return {
    type: SET_CURRENT_PAGE,
    page
  }
}

export function resetCurrentPage (): ResetCurrentPageAction {
  return {
    type: RESET_CURRENT_PAGE
  }
}

export function setFilterByProductType (product_type: PRODUCT_TYPE): SetFilterByProductTypeAction {
  return {
    type: SET_FILTER_BY_PRODUCT_TYPE,
    product_type
  }
}

export function resetFilterByTags (): ResetFIlterByTagsAction {
  return {
    type: RESET_FILTER_BY_TAGS
  }
}

export function setFilterByTags (selectedTags: TAG_LIST[]): SetFilterByTagsAction {
  return {
    type: SET_FILTER_BY_TAGS,
    selectedTags
  }
}

export function deleteFilterByTags (removedTag: TAG_LIST): DeleteFilterByTagsAction {
  return {
    type: DELETE_FILTER_BY_TAGS,
    removedTag
  }
}

export function requestItems (query: string): RequestItemsAction {
  return {
    type: REQUEST_ITEMS,
    query
  }
}

export function successItems (items: Item[], query: string): SuccessItemsAction {
  return {
    type: SUCCESS_ITEMS,
    items,
    query
  }
}

export function failureItems (error: TypeError, query: string): FailureItemsAction {
  return {
    type: FAILURE_ITEMS,
    error,
    query
  }
}

export function requestItem (id: number): RequestItemAction {
  return {
    type: REQUEST_ITEM,
    id
  }
}

export function successItem (item: Item, id: number): SuccessItemAction {
  return {
    type: SUCCESS_ITEM,
    id,
    item
  }
}

export function failureItem (error: TypeError, id: number): FailureItemAction {
  return {
    type: FAILURE_ITEM,
    id,
    error
  }
} 

export const fetchItem = (id: number): AppThunk => async dispatch => {
  dispatch(requestItem(id))
  try {
    const response = await fetch(itemsApi(`/${id}.json`))
    const json = await response.json()
    return dispatch(successItem(json, id))
  }
  catch (err) {
    console.log(err)
    return dispatch(failureItem(err, id))
  }
}

const fetchItems = (query: string): AppThunk => async dispatch => {
  dispatch(requestItems(query))
  try {
    const response = await fetch(itemsApi(query))
    const json = await response.json()
    return dispatch(successItems(json, query))
  }
  catch (err) {
    console.log(err)
    return dispatch(failureItems(err, query))
  }
}

const shouldFetchItems = (itemsByFilters: ItemsByFiltersInterface, query: string) => {
  const items = itemsByFilters[query]
   if(!items) {
    return true
  } else if (items.isFetching) {
    return false
  }
}

export const fetchItemsIfNeeded = (query: string): AppThunk | void => (dispatch, getState) => {
  if (shouldFetchItems(getState().itemsByFilters, query)) {
    return dispatch(fetchItems(query))
  }
}