import {
  PRODUCT_TYPE,
  SELECT_PRODUCT_TYPE,
  GET_ITEMS_BY_PRODUCT_TYPE,
  Items,
  SelectProductTypeAction,
  GetItemsByProductTypeAction
} from './../types'



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