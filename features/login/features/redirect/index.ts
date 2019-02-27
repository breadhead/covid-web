import { Role } from '@app/models/Users/User'
import Router from 'next/router'

export enum Condition {
  signIn = 'signIn',
  signUp = 'signUp',
}

export default (roles: Role[], wantTo?: string, condition?: Condition) => {
  if (wantTo && wantTo.length > 0) {
    Router.push(wantTo)
    return
  }

  if (roles.includes(Role.Admin)) {
    Router.push('/admin')
  } else if (roles.includes(Role.Client)) {
    redirectUser(condition)
  } else if (roles.includes(Role.CaseManager)) {
    Router.push('/manager')
  } else if (roles.includes(Role.Doctor)) {
    Router.push('/doctor')
  }
}
const redirectUser = (condition?: Condition) => {
  if (condition === Condition.signUp) {
    Router.push('/client/before-consultation')
  } else {
    Router.push('/client')
  }
}
