import * as yup from 'yup'

type Schema = yup.Schema<any>

type ValidateCb = (value: any, values: object) => string | undefined

type Validator = (
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

export { Validator, Schema, validator, ValidateCb }
