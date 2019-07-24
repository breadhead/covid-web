import { canUseDOM } from '@app/lib/helpers/canUseDOM'

interface Window {
  [key: string]: {
    push: (name?: string) => void
  }
}

export const GTM_ID = 'GTM-NGQHJ49'
export const DATA_LAYER_NAME = 'dataLayer'
export const dataLayer =
  canUseDOM && ((window as unknown) as Window)[DATA_LAYER_NAME]
