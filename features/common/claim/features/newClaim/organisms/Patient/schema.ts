import * as yup from 'yup'

const REQUIRED = 'Обязательное поле'

export const schema = {
  localizationPresence: yup.bool().required(REQUIRED),
  localization: yup.string().required(REQUIRED),
  age: yup
    .number()
    .positive('Введите положительное число')
    .required(REQUIRED),
  gender: yup.string().required(REQUIRED),
  regions: yup.string().required(REQUIRED),
}
