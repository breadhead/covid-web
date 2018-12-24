import * as yup from 'yup'

export type Validator = (
  value: any,
  schema: yup.Schema<any>,
) => undefined | string
export const validator: Validator = (value, schema) => {
  try {
    schema.validateSync(value)
  } catch (error) {
    return error.message
  }
}
