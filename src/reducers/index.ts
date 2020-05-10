import { combineReducers } from 'redux'

function store (state: string = 'this is store'): string {
  return state
}

export default combineReducers({
  store
})
