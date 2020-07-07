import {
  PRODUCT_TYPE,
  SELECT_PRODUCT_TYPE,
  GET_ITEMS_BY_PRODUCT_TYPE,
  Items,
  SelectProductTypeAction,
  GetItemsByProductTypeAction,
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
  Item
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

export function selectProductType (productType: PRODUCT_TYPE): SelectProductTypeAction {
  return {
    type: SELECT_PRODUCT_TYPE,
    productType
  }
}

export function getItemsByProductType (page: PRODUCT_TYPE, items: Items[]): GetItemsByProductTypeAction {
  return {
    type: GET_ITEMS_BY_PRODUCT_TYPE,
    page,
    items
  }
}

export function requestItems (query: string): RequestItemsAction {
  return {
    type: REQUEST_ITEMS,
    query
  }
}

export function successItems (items: Item[]): SuccessItemsAction {
  return {
    type: SUCCESS_ITEMS,
    items
  }
}

export function failureItems (error: typeof Error): FailureItemsAction {
  return {
    type: FAILURE_ITEMS,
    error
  }
}

const fetchItems = (state: RootState, query: string): AppThunk => async dispatch => {
  dispatch(requestItems(query))
  try {
    const response = await fetch(itemsApi(state.selectedProductType, query))
    const json = await response.json()
    return dispatch(successItems(json))
  }
  catch (err) {
    return dispatch(failureItems(err))
  }
}

const shouldFetchItems = (state: RootState) => {

}