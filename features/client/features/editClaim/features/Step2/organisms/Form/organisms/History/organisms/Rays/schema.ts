import * as yup from 'yup'

const REQUIRED = 'Обязательное поле'

export const schema = {
  region: yup.string().required(REQUIRED),
  when: {
    month: yup.number().required(REQUIRED),
    year: yup.number().required(REQUIRED),
  },
  end: {
    month: yup.number().required(REQUIRED),
    year: yup.number().required(REQUIRED),
  },
  schema: yup.string().required(REQUIRED),
}
