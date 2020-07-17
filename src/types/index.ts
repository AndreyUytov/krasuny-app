import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import {RootState} from './../reducers'

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export interface Item {
  id: number,
  brand: string,
  name: string,
  price: number,
  price_sign: string | number | null,
  currency: string | number | null,
  image_link: string,
  product_link: string | number | null,
  website_link: string | number | null,
  description: string,
  rating: number,
  category: any,
  product_type: PRODUCT_TYPE,
  tag_list: TAG_LIST [],
  [propName: string]: any
}

export const REQUEST_ITEMS = 'REQUEST_ITEMS'
export const SUCCESS_ITEMS = 'SUCCESS_ITEMS'
export const FAILURE_ITEMS = 'FAILURE_ITEMS'

export const SET_FILTER_BY_TAGS = 'SET_FILTER_BY_TAGS'
export const DELETE_FILTER_BY_TAGS = 'DELETE_FILTER_BY_TAGS'
export const RESET_FILTER_BY_TAGS = 'RESET_FILTER_BY_TAGS'
export const SET_FILTER_BY_PRODUCT_TYPE = 'SET_FILTER_BY_PRODUCT_TYPE'
export const SET_FILTER_BY_SELECTION = 'SET_FILTER_BY_SELECTION'
export const RESET_FILTER_BY_SELECTION = 'RESET_FILTER_BY_SELECTION'
export type SELECTION = 'rating' | 'price'

export const MAX_ITEMS_PER_PAGE = 16
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const RESET_CURRENT_PAGE = 'RESET_CURRENT_PAGE'

export interface SetCurrentPageAction {
  type: typeof SET_CURRENT_PAGE,
  page: number
}

export interface ResetCurrentPageAction {
  type: typeof RESET_CURRENT_PAGE,
}

export type NumberPageActionType = ResetCurrentPageAction | SetCurrentPageAction

export interface SetFilterBySelectionAction {
  type: typeof SET_FILTER_BY_SELECTION,
  selection: SELECTION
}

export interface ResetFilterBySelection {
  type: typeof RESET_FILTER_BY_SELECTION
}

export interface SetFilterByProductTypeAction {
  type: typeof SET_FILTER_BY_PRODUCT_TYPE,
  product_type: PRODUCT_TYPE
}

export interface DeleteFilterByTagsAction {
  type: typeof DELETE_FILTER_BY_TAGS,
  removedTag: TAG_LIST
}

export interface ResetFIlterByTagsAction {
  type: typeof RESET_FILTER_BY_TAGS
}

export interface SetFilterByTagsAction {
  type: typeof SET_FILTER_BY_TAGS,
  selectedTags: TAG_LIST[]
}

export type FilterActionType = DeleteFilterByTagsAction | ResetFIlterByTagsAction | SetFilterByTagsAction | SetFilterByProductTypeAction | ResetFilterBySelection | SetFilterBySelectionAction

export interface RequestItemsAction {
  type: typeof REQUEST_ITEMS,
  query: string
}

export interface SuccessItemsAction {
  type: typeof SUCCESS_ITEMS,
  items: Item [],
  query: string
}

export interface FailureItemsAction {
  type: typeof FAILURE_ITEMS,
  error: TypeError,
  query: string
}

export type ItemsActionType = FailureItemsAction | SuccessItemsAction | RequestItemsAction

export enum PAGEMAP {
  blush = 'Румянец',
  bronzer = 'Тональное средство',
  eyebrow = 'Средства для бровей',
  eyeliner = 'Средства для век',
  eyeshadow = 'Тени',
  foundation = 'Основа',
  lip_liner = 'Карандаш для губ',
  lipstick = 'Губная помада',
  mascara = 'Тушь для ресниц',
  nail_polish = 'Лак для ногтей'
}

export enum PRODUCT_TYPE {
  blush = 'blush',
  bronzer = 'bronzer',
  eyebrow = 'eyebrow',
  eyeliner = 'eyeliner',
  eyeshadow = 'eyeshadow',
  foundation = 'foundation',
  lip_liner = 'lip_liner',
  lipstick = 'lipstick',
  mascara = 'mascara',
  nail_polish = 'nail_polish'
}

export enum TAG_LIST {
  Canadian = 'Canadian',
  CertClean ='CertClean',
  Chemical_Free = 'Chemical Free',
  Dairy_Free = 'Dairy Free',
  EWG_Verified = 'EWG Verified',
  EcoCert = 'EcoCert',
  Fair_Trade = 'Fair Trade',
  Gluten_Free = 'Gluten Free',
  Hypoallergenic = 'Hypoallergenic',
  Natural = 'Natural',
  No_Talc = 'No Talc',
  Non_GMO = 'Non-GMO',
  Organic = 'Organic',
  Peanut_Free_Product = 'Peanut Free Product',
  Sugar_Free = 'Sugar Free',
  USDA_Organic = 'USDA Organic',
  Vegan = 'Vegan',
  alcohol_free = 'alcohol free',
  cruelty_free = 'cruelty free',
  oil_free = 'oil free',
  purpicks = 'purpicks',
  silicone_free = 'silicone free',
  water_free = 'water free'
}

interface mapForTagList {
  [propName: string] : TAG_LIST []
}

export const mapTagListToProductType: mapForTagList = {
  [PRODUCT_TYPE.blush] : [
    TAG_LIST.Vegan, TAG_LIST.Gluten_Free, TAG_LIST.Canadian, TAG_LIST.Natural,
    TAG_LIST.Non_GMO, TAG_LIST.Organic, TAG_LIST.USDA_Organic, TAG_LIST.purpicks,
    TAG_LIST.CertClean, TAG_LIST.No_Talc, TAG_LIST.Hypoallergenic, TAG_LIST.EWG_Verified 
  ],
  [PRODUCT_TYPE.bronzer] : [
    TAG_LIST.Gluten_Free, TAG_LIST.Canadian, TAG_LIST.Natural, TAG_LIST.Organic,
    TAG_LIST.Vegan, TAG_LIST.EWG_Verified, TAG_LIST.purpicks
  ],
  [PRODUCT_TYPE.eyebrow] : [
    TAG_LIST.purpicks, TAG_LIST.EWG_Verified
  ],
  [PRODUCT_TYPE.eyeliner] : [
    TAG_LIST.Vegan, TAG_LIST.Canadian, TAG_LIST.Natural, TAG_LIST.Gluten_Free, 
    TAG_LIST.Organic, TAG_LIST.CertClean, TAG_LIST.purpicks, TAG_LIST.No_Talc,
    TAG_LIST.Hypoallergenic, TAG_LIST.EWG_Verified, TAG_LIST.EcoCert
  ],
  [PRODUCT_TYPE.eyeshadow] : [
    TAG_LIST.Vegan, TAG_LIST.Canadian, TAG_LIST.Gluten_Free, TAG_LIST.Natural,
    TAG_LIST.Non_GMO, TAG_LIST.CertClean, TAG_LIST.purpicks, TAG_LIST.Organic,
    TAG_LIST.EWG_Verified, TAG_LIST.USDA_Organic, TAG_LIST.No_Talc, TAG_LIST.Hypoallergenic,
    TAG_LIST.EcoCert
  ],
  [PRODUCT_TYPE.foundation] : [
    TAG_LIST.Vegan, TAG_LIST.Canadian, TAG_LIST.Natural, TAG_LIST.Gluten_Free,
    TAG_LIST.CertClean, TAG_LIST.purpicks, TAG_LIST.No_Talc, TAG_LIST.Hypoallergenic,
    TAG_LIST.EWG_Verified, TAG_LIST.silicone_free, TAG_LIST.oil_free, TAG_LIST.alcohol_free,
    TAG_LIST.cruelty_free, TAG_LIST.water_free
  ],
  [PRODUCT_TYPE.lip_liner] : [
    TAG_LIST.Natural, TAG_LIST.Vegan, TAG_LIST.Gluten_Free, TAG_LIST.Canadian, 
    TAG_LIST.No_Talc, TAG_LIST.Hypoallergenic, TAG_LIST.EWG_Verified, TAG_LIST.purpicks,
    TAG_LIST.cruelty_free
  ],
  [PRODUCT_TYPE.lipstick] : [
    TAG_LIST.Canadian, TAG_LIST.Natural, TAG_LIST.Peanut_Free_Product, TAG_LIST.Non_GMO,
    TAG_LIST.Gluten_Free, TAG_LIST.Vegan, TAG_LIST.Organic, TAG_LIST.CertClean, TAG_LIST.purpicks,
    TAG_LIST.No_Talc, TAG_LIST.Hypoallergenic, TAG_LIST.EWG_Verified, TAG_LIST.Chemical_Free,
    TAG_LIST.cruelty_free
  ],
  [PRODUCT_TYPE.mascara] : [
    TAG_LIST.Gluten_Free, TAG_LIST.Natural, TAG_LIST.Vegan, TAG_LIST.Canadian, TAG_LIST.Organic,
    TAG_LIST.No_Talc, TAG_LIST.Hypoallergenic, TAG_LIST.EWG_Verified, TAG_LIST.purpicks,
    TAG_LIST.EcoCert, TAG_LIST.USDA_Organic, TAG_LIST.CertClean
  ],
  [PRODUCT_TYPE.nail_polish] : [
    TAG_LIST.Vegan, TAG_LIST.Canadian, TAG_LIST.Natural, TAG_LIST.Dairy_Free, TAG_LIST.Non_GMO,
    TAG_LIST.Sugar_Free, TAG_LIST.Fair_Trade, TAG_LIST.Gluten_Free
  ]
}

export type BrandsList = 'almay' | 'alva' | 'anna sui' | 'annabelle' | 'benefit' | 'boosh' | "burt's bees" | 'butter london' | "c'est moi" | 'cargo cosmetics' | 'china glaze' | 'clinique' | 
                         'coastal classic creation' | 'colourpop' | "covergirl" | "dalish" |  "deciem" | "dior" | "dr. hauschka" | "e.l.f." | "essie"  | "fenty" | "glossier" | "green people" | 
                         "iman" | "l'oreal" | "lotus cosmetics usa" | "maia's mineral galaxy" | "marcelle" | "marienatie" | "maybelline" | "milani" |  "mineral fusion" | "misa" | "mistura" | "moov" |
                          "nudus" | "nyx" | "orly" | "pacifica" | "penny lane organics" | "physicians formula" | "piggy paint" | "pure anada" |  "rejuva minerals" | "revlon" | "sally b's skin yummies" |
                           "salon perfect" | "sante" |  "sinful colours" | "smashbox" | "stila" | "suncoat" | "w3llpeople" | "wet n wild" | "zorah" | "zorah biocosmetiques"

export const BRANDS: BrandsList[] = ['almay','alva','anna sui','annabelle','benefit','boosh',"burt's bees",'butter london',"c'est moi",'cargo cosmetics','china glaze','clinique','coastal classic creation',
                                      'colourpop',"covergirl","dalish","deciem","dior","dr. hauschka","e.l.f.","essie","fenty","glossier","green people","iman","l'oreal","lotus cosmetics usa","maia's mineral galaxy",
                                      "marcelle","marienatie","maybelline","milani","mineral fusion","misa","mistura","moov","nudus","nyx","orly","pacifica","penny lane organics","physicians formula","piggy paint","pure anada",
                                      "rejuva minerals","revlon","sally b's skin yummies","salon perfect","sante","sinful colours","smashbox","stila","suncoat","w3llpeople","wet n wild","zorah","zorah biocosmetiques"]