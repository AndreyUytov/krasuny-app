import {PRODUCT_TYPE} from './../types/index'

export const SELECT_PAGE = 'SELECT_PAGE'

export function selectProductType (page: PRODUCT_TYPE): {type: string, page: PRODUCT_TYPE} {
  return {
    type: SELECT_PAGE,
    page
  }
}