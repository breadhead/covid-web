import Gender from '@app/models/Gender'
import * as yup from 'yup'
import { countries, regions } from './config'

const REQUIRED = 'Обязательное поле'

export const schema = {
  name: yup
    .string()
    .min(1, REQUIRED)
    .required(REQUIRED),
  regions: yup
    .mixed()
    .oneOf(regions, REQUIRED)
    .required(REQUIRED),
  countries: yup
    .mixed()
    .oneOf(countries, REQUIRED)
    .required(REQUIRED),
  age: yup
    .number()
    .positive('Введите положительное число')
    .required(REQUIRED),
  gender: yup
    .mixed()
    .oneOf(Object.values(Gender))
    .required(REQUIRED),
  email: yup
    .string()
    .email('Введите email')
    .required(REQUIRED),
}
