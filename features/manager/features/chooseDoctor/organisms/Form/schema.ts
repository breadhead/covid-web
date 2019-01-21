import * as yup from 'yup'

const REQUIRED = 'Обязательное поле'

export const schema = {
  doctorLogin: yup.string().required(REQUIRED),
}
