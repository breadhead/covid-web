import { RangePickerValue } from 'antd/lib/date-picker/interface'
import { Moment } from 'moment'
import { Option } from 'tsoption'

type NullableDate = Date | undefined

interface Range {
  start: NullableDate
  end: NullableDate
}

const toNullableDate = (moment?: Moment) =>
  Option.of(moment)
    .map(value => value.toDate() as NullableDate)
    .getOrElse(undefined)

export const rangePickerValueToDates = (value: RangePickerValue): Range =>
  ({
    start: toNullableDate(value[0]),
    end: toNullableDate(value[1]),
  } as Range)
