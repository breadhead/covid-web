import { Role } from '@app/models/Users/User';
import { head } from 'lodash';
import Router from 'next/router';

export enum Condition {
  signIn = 'signIn',
  signUp = 'signUp',
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

}
