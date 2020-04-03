import base64 from 'base-64';

import { getFromConfig } from '../getPublicRuntimeConfig';

export const getImageProxySrc = (url: string) =>
  `${getFromConfig('storageUrl')}/pr:desktop/${base64.encode(url)}`;
