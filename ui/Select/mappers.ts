import { LabeledValue } from 'antd/lib/select'

type EnumEntry = [string, string]

export const mapString = (str: string): LabeledValue => ({
  key: str,
  label: str,
})

export const mapEnum = ([key, label]: EnumEntry): LabeledValue => ({
  key,
  label,
})
