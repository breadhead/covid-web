import QuotaAmount from "@app/features/quotaPage/molecules/QuotaAmount";

export interface User {
  token: string
}

export default interface ApiClient {
  quotas(): Promise<any[]>
  quota(id: string): Promise<any>
  login(login: string, password: string): Promise<User>
  setToken(token: string): void
}
