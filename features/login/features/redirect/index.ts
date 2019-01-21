import { Role } from '@app/lib/api/ApiClient'
import Router from 'next/router'

export enum Condition {
  signIn = 'signIn',
  signUp = 'signUp',
}

export default (roles: string[], condition?: Condition) => {
  if (roles.includes(Role.Admin)) {
    Router.push('/admin')
  } else if (roles.includes(Role.Client)) {
    debugger
    if (condition === Condition.signUp) {
      Router.push('/client/before-consultation')
    } else {
      Router.push('/client')
    }
  } else if (roles.includes(Role.CaseManager)) {
    Router.push('/manager')
  } else if (roles.includes(Role.Doctor)) {
    Router.push('/doctor')
  }
}
