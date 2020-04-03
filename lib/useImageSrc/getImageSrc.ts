import { parse } from 'url';

import { Photo } from '@app/models/sanity/Photo';

import { getImageProxySrc } from './getImageProxySrc';
import { imageUrlBuilder } from './builder';
import { getFromConfig } from '../getPublicRuntimeConfig';

const _getImageSrc = (image: Photo) => {
  const src = () => {
    return imageUrlBuilder.image(image).url();
  };

  return src();
};

const getProxyPath = (src: string | '') => {
  const parsedURL = parse(src);
  const newSrc =
    typeof parsedURL !== 'object' || parsedURL === null
      ? src
      : `/content/${parsedURL.query}${parsedURL.pathname}`;

  return getFromConfig('prodUrl') + newSrc;
};

export const getImageSrc = (image: Photo) => {
  if (!image.asset) return null;

  const src = _getImageSrc(image) || '';
  if (src) {
    return getProxyPath(src);
  }

  return src;
};

export const getImageProxySrcFromSanity = (image: Photo) =>
  getImageProxySrc(getImageSrc(image) || '');
