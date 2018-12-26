import * as yup from 'yup'

const REQUIRED = 'Обязательное поле'

export const schema = {
  diseasePresence: yup.bool().required(REQUIRED),
  disease: yup.string().required(REQUIRED),
  medicationPresence: yup.bool().required(REQUIRED),
  medication: yup.string().required(REQUIRED),
  relativesPresence: yup.bool().required(REQUIRED),
  relative: yup.string().required(REQUIRED),
}
