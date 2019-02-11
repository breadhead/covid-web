import * as yup from 'yup'

export type Schema = yup.Schema<any>

export type ValidateCb = (value: any, values: object) => void
interface ValidatorParams {
  value: any
  values: any
  schema?: Schema
  validateCb?: ValidateCb
}
export type Validator = (params: ValidatorParams) => undefined | string

const validator: Validator = ({ value, values, schema, validateCb }) => {
  try {
    if (schema) {
      schema.validateSync(value)
    }
    if (validateCb) {
      validateCb(value, values)
    }
  } catch (error) {
    return error.message
  }
}

export { validator }
