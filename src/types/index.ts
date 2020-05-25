export const SELECT_PRODUCT_TYPE = 'SELECT_PRODUCT_TYPE'

export interface SelectProductTypeAction {
  type: typeof SELECT_PRODUCT_TYPE,
  page: string
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