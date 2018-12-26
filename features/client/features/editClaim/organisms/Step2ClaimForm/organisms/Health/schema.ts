import * as yup from 'yup'

const REQUIRED = 'Обязательное поле'

export const schema = {
  selfCare: yup.string().required(REQUIRED),
}
