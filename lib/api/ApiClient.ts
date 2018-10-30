import { Quota, Transaction } from '@app/models/Quota'
import FileUploader from './FileUploader/FileUploader'

export interface User {
  token: string
}

export default interface ApiClient {
  token: string
  fileUploader: FileUploader
  quotas(): Promise<Quota[]>
  history(): Promise<Transaction[]>
  login(login: string, password: string): Promise<User>
}
