import { themes } from '@app/features/client/values'
import ClaimTarget from '@app/models/Claim/ClaimTarget'
import * as yup from 'yup'
export const schema = {
  target: yup
    .mixed()
    .oneOf(Object.keys(ClaimTarget), 'Обязательное поле')
    .required('Обязательное поле'),
  theme: yup
    .mixed()
    .oneOf(themes, 'Обязательное поле')
    .required('Обязательное поле'),
}
