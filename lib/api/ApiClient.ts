import { Quota, Transaction } from '@app/models/Quota'
import FileUploader from './FileUploader/FileUploader'
import { QuotaTransferRequest } from './request/QuotaTransfer'
import { QuotaTransferResponse } from './response/QuotaTransfer'
export interface User {
  token: string
}

export default interface ApiClient {
  token: string
  fileUploader: FileUploader
  quotas(): Promise<Quota[]>
  history(): Promise<Transaction[]>
  login(login: string, password: string): Promise<User>
  transfer(quotaTransferRequest: QuotaTransferRequest): Promise<QuotaTransferResponse>
}
