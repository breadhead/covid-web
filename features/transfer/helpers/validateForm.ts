import { QuotaTransferRequest } from '@app/lib/api/request/QuotaTransfer'
import * as yup from 'yup'
const schema = yup.object().shape({
  sourceId: yup
    .string()
    .required('Обязательное поле'),
  targetId: yup
    .string()
    .required('Обязательное поле'),
  count: yup
    .number()
    .required('Обязательное поле'),
})

export const validateForm = (data: QuotaTransferRequest) => {


  schema.validate(data)
}
