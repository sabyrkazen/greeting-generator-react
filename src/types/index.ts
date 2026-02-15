export const OccasionType = {
  BIRTHDAY: 'Birthday',
  NEW_YEAR: 'New Year',
} as const

export type OccasionType = typeof OccasionType[keyof typeof OccasionType]

export const ToneType = {
  OFFICIAL: 'Official',
  FRIENDLY: 'Friendly',
  HUMOROUS: 'Humorous',
  ROMANTIC: 'Romantic',
  TOUCHING: 'Touching',
  ADULT: '18+',
} as const

export type ToneType = typeof ToneType[keyof typeof ToneType]

export type LanguageType = 'English'
  | 'Русский'
  | 'Қазақша'
  | 'Українська'
  | 'Беларуская'
  | 'Deutsch'
  | 'Français'
  | 'Español'
  | 'Italiano'
  | 'Português'
