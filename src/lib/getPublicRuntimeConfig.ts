import getConfig from 'next/config';
import {get} from 'lodash';

export const getFromConfig = (accessor: string) => {
  const { publicRuntimeConfig } = getConfig();

  return get(publicRuntimeConfig, accessor);
};
