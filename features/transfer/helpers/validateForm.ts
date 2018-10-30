import { QuotaTransferRequest } from '@app/lib/api/request/QuotaTransfer'
import * as yup from 'yup'
import { validateCountToTransfer } from './validateCountToTransfer'
import { validateIds } from './validateIds'
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

export const validateForm = async (
  data: QuotaTransferRequest,
  quotas: Array<{ id: string, name: string, count: number }>) => {

  await schema.validate(data)
  validateIds(data.sourceId, data.targetId)
  validateCountToTransfer(data.sourceId, data.count, quotas)
}
