import * as yup from 'yup'

const REQUIRED = 'Обязательное поле'

export const schema = {
  selfCare: yup.string().required(REQUIRED),
  /*  target: yup
    .mixed()
    .oneOf(Object.keys(ClaimTarget), REQUIRED)
    .required(REQUIRED),
  theme: yup
    .mixed()
    .oneOf(themes, REQUIRED)
    .required(REQUIRED),
  diagnosis: yup.bool().required(REQUIRED),
  localization: yup
    .mixed()
    .oneOf(localizations, REQUIRED)
    .required(REQUIRED),
  corporate: yup.bool().required(REQUIRED),
  companyName: yup
    .string()
    .min(1, REQUIRED)
    .required(REQUIRED),
  companyPosition: yup
    .string()
    .min(1, REQUIRED)
    .required(REQUIRED), */
}
