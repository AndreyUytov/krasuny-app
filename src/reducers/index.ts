import { combineReducers } from 'redux'

import {SELECT_PAGE} from './../action'

function store (state: string = 'this is store'): string {
  return state
}

function selectedPage (state: string = '/', action: {type: string, page: string}): string {
  switch (action.type) {
    case SELECT_PAGE:
      return action.page
    default:
     return state
  }
}

export default combineReducers({
  store,
  selectedPage
})
