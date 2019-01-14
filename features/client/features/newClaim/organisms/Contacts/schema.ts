import * as yup from 'yup'

const REQUIRED = 'Обязательное поле'

export const schema = {
  name: yup
    .string()
    .min(1, REQUIRED)
    .required(REQUIRED),
  regions: yup.string().required(REQUIRED),
  countries: yup.string().required(REQUIRED),
  age: yup
    .number()
    .positive('Введите положительное число')
    .required(REQUIRED),
  gender: yup.string().required(REQUIRED),
  email: yup
    .string()
    .email('Введите email')
    .required(REQUIRED),
}
