import { Role } from '../../lib/api/ApiClient'

export interface User {
  token: string
  roles: Role[]
}
