import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import {RootState} from './../reducers'

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export interface Items {
  [propName:string]: string
}

export const SELECT_PRODUCT_TYPE = 'SELECT_PRODUCT_TYPE'
export const GET_ITEMS_BY_PRODUCT_TYPE = 'GET_ITEMS_BY_PRODUCT_TYPE'

export interface SelectProductTypeAction {
  type: typeof SELECT_PRODUCT_TYPE,
  page: PRODUCT_TYPE
}

export interface GetItemsByProductTypeAction {
  type: typeof GET_ITEMS_BY_PRODUCT_TYPE,
  page: PRODUCT_TYPE,
  items: Items[]
}

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