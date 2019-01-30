import { Schema } from '../container'

type Validator = (value: any, schema: Schema) => undefined | string

const validator: Validator = (value, schema) => {
  try {
    schema.validateSync(value)
  } catch (error) {
    return error.message
  }
}

export { Validator, Schema, validator }
