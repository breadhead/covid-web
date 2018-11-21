import { Quota } from '@app/models/Quota/Quota'

export interface QuotaTransferResponse {
  source: Quota,
  target: Quota
}
