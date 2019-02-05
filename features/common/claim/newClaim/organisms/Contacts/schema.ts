import * as yup from 'yup'

const REQUIRED = 'Обязательное поле'

export const schema = {
  name: yup
    .string()
    .min(1, REQUIRED)
    .required(REQUIRED),
  email: yup
    .string()
    .email('Введите email')
    .required(REQUIRED),
}
