import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup.string().required('Название должно быть длиннее 2 символов'),
  category: yup.string(),
  companyName: yup.string().required('Укажите имя жертвователя'),
  comment: yup.string(),
  count: yup
    .number()
    .typeError('Количество квот должно быть числом')
    .required('Укажите количество квот'),
  publicCompany: yup.string(),
  logotype: yup.string(),
  companyLink: yup.string(),
  logotypeComment: yup.string(),
})

export default schema
