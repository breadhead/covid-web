import { Quota } from '@app/models/Quota'

export interface QuotaTransferResponse {
  source: Quota,
  target: Quota
}
