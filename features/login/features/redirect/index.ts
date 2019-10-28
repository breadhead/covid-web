import { Role } from '@app/models/Users/User';
import { head } from 'lodash';
import Router from 'next/router';

export enum Condition {
  signIn = 'signIn',
  signUp = 'signUp',
}

const redirectUser = (condition?: Condition) => {
  if (condition === Condition.signUp) {
    Router.push('/client/new-claim/rules/')
  } else {
    Router.push('/client')
  }
}

export default (
  roles: Role[],
  wantTo?: string | string[],
  condition?: Condition,
) => {
  if (wantTo && wantTo.length > 0) {
    const realWantTo = Array.isArray(wantTo) ? head(wantTo) || '' : wantTo
    Router.push(`/${decodeURIComponent(realWantTo)}`)
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
