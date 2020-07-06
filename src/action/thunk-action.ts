import {AppThunk, PRODUCT_TYPE} from './../types'
import {getItemsByProductType} from './../action'

export const getItems = (page: PRODUCT_TYPE) : AppThunk => async dispatch => {
  const httpAdress = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${page}`
  let response = await fetch(httpAdress)
  let items = await response.json()
  dispatch(
    getItemsByProductType(page, items)
  )
}

