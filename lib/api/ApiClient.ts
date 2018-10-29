import FileUploader from './FileUploader/FileUploader'

export interface User {
  token: string
}

export default interface ApiClient {
  token: string
  fileUploader: FileUploader
  quotas(): Promise<any[]>
  login(login: string, password: string): Promise<User>
}
