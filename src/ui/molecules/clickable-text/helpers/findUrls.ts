import { URL_REGEXP } from './URL_REGEXP'

export const findUrls = (text: string): string[] => text.match(URL_REGEXP) || []
