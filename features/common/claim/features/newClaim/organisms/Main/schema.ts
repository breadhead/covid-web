import * as yup from 'yup'

const REQUIRED = 'Обязательное поле'

export const schema = {
  target: yup.string().required(REQUIRED),
  theme: yup.string().required(REQUIRED),
  localizationPresence: yup.bool().required(REQUIRED),
  localization: yup.string().required(REQUIRED),
  companyPresence: yup.bool().required(REQUIRED),
  companyName: yup
    .string()
    .min(1, REQUIRED)
    .required(REQUIRED),
  companyPosition: yup
    .string()
    .min(1, REQUIRED)
    .required(REQUIRED),
}
