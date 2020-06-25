import {
  PRODUCT_TYPE,
  SELECT_PRODUCT_TYPE,
  GET_ITEMS_BY_PRODUCT_TYPE,
  Items,
  SelectProductTypeAction,
  GetItemsByProductTypeAction,
  TAG_LIST,
  SelectFilterByTagsAction,
  SET_FILTER_BY_TAGS
} from './../types'

export function selectFilterByTags (tags: TAG_LIST[]): SelectFilterByTagsAction {
  return {
    type: SET_FILTER_BY_TAGS,
    tags
  }
}

export function selectProductType (page: PRODUCT_TYPE): SelectProductTypeAction {
  return {
    type: SELECT_PRODUCT_TYPE,
    page
  }
}

export function getItemsByProductType (page: PRODUCT_TYPE, items: Items[]): GetItemsByProductTypeAction {
  return {
    type: GET_ITEMS_BY_PRODUCT_TYPE,
    page,
    items
  }
}