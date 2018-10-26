
export interface User {
  token: string
}

export default interface ApiClient {
  quotas(): Promise<any[]>
  login(login: string, password: string): Promise<User>
  setToken(token: string): void
}
