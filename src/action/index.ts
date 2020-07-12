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
  SetFilterByProductTypeAction
} from './../types'

import { ItemsByFiltersInterface } from './../reducers'

import {itemsApi} from './../api/api'

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

export function failureItems (error: typeof Error, query: string): FailureItemsAction {
  return {
    type: FAILURE_ITEMS,
    error,
    query
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
    return dispatch(failureItems(err, query))
  }
}

const shouldFetchItems = (itemsByFilters: ItemsByFiltersInterface, query: string): boolean => {
  const items = itemsByFilters[query]
   if(!items) {
    return true
  } else if (items.isFetching) {
    return false
  }
  return true
}

export const fetchItemsIfNeeded = (query: string): AppThunk | void => (dispatch, getState) => {
  if (shouldFetchItems(getState().itemsByFilters, query)) {
    return dispatch(fetchItems(query))
  }
}