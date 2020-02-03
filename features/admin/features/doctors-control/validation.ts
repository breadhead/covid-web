import * as yup from 'yup'

const REQUIRED = 'Обязательное поле'

export const schema = {
  name: yup
    .string()
    .min(1, REQUIRED)
    .required(REQUIRED),
  email: yup
    .string()
    .min(1, REQUIRED)
    .required(REQUIRED),
  boardUsername: yup
    .string()
    .min(1, REQUIRED)
    .required(REQUIRED),
  rawPassword: yup
    .string()
    .min(1, REQUIRED)
    .required(`${REQUIRED}. Нажмите кнопку "сгенерировать"`),
}

export default schema
