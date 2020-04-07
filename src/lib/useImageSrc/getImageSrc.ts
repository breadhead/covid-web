import base64 from 'base-64';
import { isObject } from 'lodash';
import { parse } from 'url';

import { Photo } from '@app/src/domain/models/sanity/Photo';

import { getFromConfig } from '../getPublicRuntimeConfig';
import { imageUrlBuilder } from './builder';

const getProxyPath = (src: string | '') => {
  const parsedURL = parse(src);
  const newSrc = isObject(parsedURL)
    ? `/content/${parsedURL.query}${parsedURL.pathname}`
    : src;

  return getFromConfig('prodUrl') + newSrc;
};

const getImageProxySrc = (url: string, width = 0, height = 0) =>
  `${getFromConfig('storageUrl')}/w:${width}/h:${height}/${base64.encode(url)}`;

export const getImageSrc = (
  image?: Photo,
  width?: number,
  height?: number,
): string | null => {
  if (!image || !image.asset) return null;

  const src = imageUrlBuilder.image(image).url() || '';

  const url = getProxyPath(src);

  return getImageProxySrc(url, width, height);
};
