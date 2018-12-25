import * as yup from 'yup'

const REQUIRED = 'Обязательное поле'

export const schema = {
  'diagnos-month': yup.number().required(REQUIRED),
  'diagnos-year': yup.number().required(REQUIRED),
}
