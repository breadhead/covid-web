import * as yup from 'yup'

const REQUIRED = 'Обязательное поле'

export const schema = {
  description: yup.string().required(REQUIRED),
  relativesDiseasesPresence: yup.bool().required(REQUIRED),
  relativesDiseases: yup.string().required(REQUIRED),
  localization: yup.string().required(REQUIRED),
  diagnosisAge: yup.number().required(REQUIRED),
}
