export enum Role {
  Client = 'client',
  CaseManager = 'case-manager',
  Doctor = 'doctor',
  Admin = 'admin',
}

export interface User {
  email: string
  token: string
  login: string
  roles: Role[]
}
