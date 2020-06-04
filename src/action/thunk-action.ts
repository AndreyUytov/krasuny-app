import {AppThunk, PRODUCT_TYPE, TAG_LIST} from './../types'
import {getItemsByProductType} from './../action'

export const getItems = (page: PRODUCT_TYPE) : AppThunk => async dispatch => {
  const httpAdress = 'http://makeup-api.herokuapp.com/api/v1/products.json?'
  let response = await fetch(
    `${httpAdress}brand=${page}`
    )
  let items = await response.json()
  dispatch(
    getItemsByProductType(page, items)
  )
}