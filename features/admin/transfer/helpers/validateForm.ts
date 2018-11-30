import { QuotaTransferRequest } from '@app/lib/api/request/QuotaTransfer'
import * as yup from 'yup'
import { validateCountToTransfer } from './validateCountToTransfer'
import { validateIds } from './validateIds'
const schema = yup.object().shape({
  count: yup
    .mixed()
    .notOneOf([NaN], 'Обязательное поле')
    .required('Обязательное поле'),
  targetId: yup
    .string()
    .required('Обязательное поле'),
  sourceId: yup
    .string()
    .required('Обязательное поле'),
})

export const validateForm = (
  data: QuotaTransferRequest,
  quotas: Array<{ id: string, name: string, count: number }>) => {

  schema.validateSync(data)
  validateIds(data.sourceId, data.targetId)
  validateCountToTransfer(data.sourceId, data.count, quotas)
}
