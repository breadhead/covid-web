import * as yup from 'yup'

const REQUIRED = 'Обязательное поле'

export const schema = {
  feeling: yup.string().required(REQUIRED),
}
