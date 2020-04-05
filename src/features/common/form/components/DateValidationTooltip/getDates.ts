import {get} from 'lodash';

import {DateInterface} from '@app/src/lib/helpers/validateDates';

export const getDates = (paths: DateInterface[], values: any) =>
  paths.map((path) => ({
    year: get(values, path.year) || null,
    month: get(values, path.month) || null,
  }));
