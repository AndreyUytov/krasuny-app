import {AppThunk, PRODUCT_TYPE, TAG_LIST} from './../types'

interface Query {
  product_type: PRODUCT_TYPE,
  product_tags?: TAG_LIST
}

export const getItems = (query: Query) : AppThunk => async dispatch => {
  const items = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${query.product_type}`)
  dispatch()
}