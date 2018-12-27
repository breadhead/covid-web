import * as yup from 'yup'

const REQUIRED = 'Обязательное поле'

export const schema = {
  'choose-city': yup.string().required(REQUIRED),
  'choose-procedures': yup.string().required(REQUIRED),
}
