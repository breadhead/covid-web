import * as yup from 'yup'

const REQUIRED = 'Обязательное поле'

export const schema = {
  target: yup.string().required(REQUIRED),
  age: yup
    .number()
    .positive('Введите положительное число')
    .required(REQUIRED),
  gender: yup.string().required(REQUIRED),
  region: yup.string().required(REQUIRED),
}
