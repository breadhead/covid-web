import base64 from 'base-64';

import { getFromConfig } from '../getPublicRuntimeConfig';

export const getImageProxySrc = (url: string) =>
  `${getFromConfig('storageUrl')}/w:0/h:0/${base64.encode(url)}`;
