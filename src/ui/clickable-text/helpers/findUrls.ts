import { URL_REGEXP, PREVIEW_IMAGE_REGEXP } from './URL_REGEXP';

export const findUrls = (text: string): string[] | any => {
  if (text.startsWith('/preview-image')) {
    return text.match(PREVIEW_IMAGE_REGEXP);
  }
  return text.match(URL_REGEXP) || [];
};
