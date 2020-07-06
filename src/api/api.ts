import {PRODUCT_TYPE} from './../types'


export function itemsApi (product_type: PRODUCT_TYPE, query?: string): string {
  if (query) {
    return `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${product_type}&${query}`
  } else {
    return `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${product_type}`
  }
}