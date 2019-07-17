import * as yup from 'yup'

export const schema = {
  password: yup
    .string()
    .min(5, 'Введите пароль')
    .required('Введите пароль'),
}
