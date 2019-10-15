import { URL_REGEXP, PREVIEW_IMAGE_REGEXP } from './URL_REGEXP'

export const findUrls = (text: string): string[] =>
  text.match(PREVIEW_IMAGE_REGEXP) || text.match(URL_REGEXP) || []
