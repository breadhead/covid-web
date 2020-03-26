import * as yup from 'yup'

const REQUIRED_MESSAGE = 'Обязательное поле'

export const schema = {
  target: yup.string().required(REQUIRED_MESSAGE),
  age: yup
    .number()
    .positive('Введите положительное число')
    .required(REQUIRED_MESSAGE),
  gender: yup.string().required(REQUIRED_MESSAGE),
  region: yup.string().required(REQUIRED_MESSAGE),
}

export const requiredSchema = yup.string().required(REQUIRED_MESSAGE)
