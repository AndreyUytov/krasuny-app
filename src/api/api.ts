export function itemsApi (query: string): string {
  return `http://makeup-api.herokuapp.com/api/v1/products.json?${query}`
  // return `/`
}