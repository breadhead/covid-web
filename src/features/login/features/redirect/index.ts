import { Role } from '@app/src/domain/models/Users/User';

export enum Condition {
  signIn = 'signIn',
  signUp = 'signUp',
}

export default (
  roles: Role[],
  wantTo?: string | string[],
  condition?: Condition,
) => {
  console.log('roles', roles);
  console.log('wantTo', wantTo);
  console.log('condition', condition);
};
