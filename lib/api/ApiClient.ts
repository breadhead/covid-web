import { Credentials } from '@app/features/loginForm/container'
import { AxiosResponse } from 'axios'

export default interface ApiClient {
  quotas(): Promise<any[]>
  login(credentials: Credentials): Promise<AxiosResponse<any>>
}
