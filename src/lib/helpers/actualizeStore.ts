import {
  flow,
  isArray,
  isPlainObject,
  isString,
  isUndefined,
  mapValues,
} from 'lodash';

const DATE_REGEX = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(.*)/;

export const tapDate = (value: string): Date | string =>
  DATE_REGEX.test(value) ? new Date(value) : value;

const taps = [tapDate];

const actualizeStore = (data: any): any => {
  if (isArray(data)) {
    return data.map(actualizeStore);
  }

  if (isString(data)) {
    return flow(taps)(data);
  }

  if (isUndefined(data) || !isPlainObject(data)) {
    return data;
  }

  return mapValues(data, (value) => actualizeStore(value));
};

export default actualizeStore;
