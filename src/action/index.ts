import {
  PRODUCT_TYPE,
  TAG_LIST,
  SetFilterByTagsAction,
  SET_FILTER_BY_TAGS,
  DeleteFilterByTagsAction,
  DELETE_FILTER_BY_TAGS,
  RESET_FILTER_BY_TAGS,
  ResetFIlterByTagsAction,
  SET_PAGINATION_PAGE,
  RESET_PAGINATION_PAGE,
  ResetPaginationPageAction,
  SetPaginationPageAction,
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

import {itemsApi} from './../api/api'
import { RootState } from '../reducers'

export function setPaginationPage (page: number): SetPaginationPageAction {
  return {
    type: SET_PAGINATION_PAGE,
    page
  }
}

export function resetPaginationPage (): ResetPaginationPageAction {
  return {
    type: RESET_PAGINATION_PAGE
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

const fetchItems = (state: RootState, query: string): AppThunk => async dispatch => {
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

const shouldFetchItems = (state: RootState, query: string) => {
  const items = state.itemsByFilters[query]
   if(!items) {
    return true
  } else if (items.isFetching) {
    return false
  }
}

export const fetchItemsIfNeeded = (state: RootState, query: string): AppThunk => (dispatch, getState) => {
  if (shouldFetchItems(getState(), query)) {
    return dispatch(fetchItems(state, query))
  }
}