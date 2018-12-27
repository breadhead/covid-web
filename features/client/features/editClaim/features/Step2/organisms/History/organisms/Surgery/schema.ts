import * as yup from 'yup'

const REQUIRED = 'Обязательное поле'

export const schema = {
  region: yup.string().required(REQUIRED),
  surgery: yup.string().required(REQUIRED),
}
