import { Item } from "./types"


export const getItemsById = (allItems: {[propName: number]: Item }, id: number) => {
  return allItems[id]
}

export function indexById (items: Item[]) {
return Object.fromEntries(items.reduce((res, cur) => {
    return res.set(cur.id, cur)
}, new Map()))
}

export const getAllItems = (itemsId: number[], allItems: {[propName: number]: Item }) => {
  return itemsId.map((id) => {
    return getItemsById(allItems, id)
  })
}