import {PRODUCT_TYPE, SELECT_PRODUCT_TYPE, SelectProductTypeAction} from './../types'



export function selectProductType (page: PRODUCT_TYPE): SelectProductTypeAction {
  return {
    type: SELECT_PRODUCT_TYPE,
    page
  }
}