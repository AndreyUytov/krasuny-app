import { RootState } from "./reducers"
import { Item } from "./types"

export const getItemsById = (state: RootState, id: number) => {
  return state.allItems[id]
}

export function indexById (items: Item[]) {
return Object.fromEntries(items.reduce((res, cur) => {
    return res.set(cur.id, cur)
}, new Map()))
}

export const getAllItems = (itemsId: number[], state: RootState) => {
  return itemsId.map((id) => {
    return getItemsById(state, id)
  })
}