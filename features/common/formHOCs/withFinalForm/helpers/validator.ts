import * as yup from 'yup'

export const validator = (value: any, schema: yup.Schema<any>) => {
  try {
    schema.validateSync(value)
  } catch (error) {
    return error.message
  }
}
