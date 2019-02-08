import * as yup from 'yup'

export type Schema = yup.Schema<any>

export type ValidateCb = (value: any, values: object) => void

export type Validator = (
  value: any,
  schema: Schema,
  values: any,
  validateCb: ValidateCb,
) => undefined | string

const validator: Validator = (value, schema, values, validateCb) => {
  try {
    schema.validateSync(value)
    validateCb(value, values)
  } catch (error) {
    return error.message
  }
}

export { validator }
