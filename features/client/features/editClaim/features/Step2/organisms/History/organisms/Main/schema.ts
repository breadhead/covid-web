import * as yup from 'yup'

const REQUIRED = 'Обязательное поле'

export const schema = {
  diagnosisDate: {
    month: yup.number().required(REQUIRED),
    year: yup.number().required(REQUIRED),
  },
}
