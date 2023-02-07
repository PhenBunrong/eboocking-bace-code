import type { TranslateResult } from 'vue-i18n'
import type { DataTableHeader } from 'vuetify'

export interface Entity {
  id?: string
  createdAt?: string | Date
  updatedAt?: string | Date
  fn?: Function
  shouldRedirect?: boolean
  shouldReturn?: boolean
  silent?: boolean
}
export interface ValidatorEntity {
  input: Record<string, any>
  rules: Record<string, any>
  messages?: Record<string, any>
  attributes?: Record<string, any>
}
export interface VDataTableHeader<T = any> extends Omit<DataTableHeader<T>, 'text'> {
  text: string | TranslateResult
  sortBy?: string
}
