import { DateInterface } from '@app/lib/helpers/validateDates'
import { get } from 'lodash'

export const getDates = (paths: DateInterface[], values: any) =>
  paths.map(path => ({
    year: get(values, path.year) || null,
    month: get(values, path.month) || null,
  }))
