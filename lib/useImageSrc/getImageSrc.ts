import { parse } from 'url'

import { imageUrlBuilder } from './builder'
import { getFromConfig } from '../getPublicRuntimeConfig'
import { Photo } from '@app/models/sanity/Photo'

export const _getImageSrc = (image: Photo) => {
  const src = () => {
    return imageUrlBuilder.image(image).url()
  }

  return src()
}

export const getProxyPath = (src: string | '') => {
  const parsedURL = parse(src)
  const newSrc =
    typeof parsedURL !== 'object' || parsedURL === null
      ? src
      : `/content/${parsedURL.query}${parsedURL.pathname}`

  return getFromConfig('prodUrl') + newSrc
}

export const getImageSrc = (image: Photo) => {
  if (!image.asset) return null

  const src = _getImageSrc(image) || ''
  if (src) {
    return getProxyPath(src)
  }

  return src
}
