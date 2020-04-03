export {
  default as SignUpModal,
  MODAL_KEY as SIGN_UP_MODAL,
  withSignUpModal,
} from './features/signUp';
export type { WithSignUpModal } from './features/signUp';

export { getToken } from './features/user';

export {
  default as SignInModal,
  MODAL_KEY as SIGN_IN_MODAL,
  unauthorizedMiddleware,
  authViolateStatus,
  getViolateState,
  withSignInModal as withLoginModal,
} from './features/signIn';
export type { WithSignInModal } from './features/signIn';

export { reducer } from './reducer';
export type { State } from './reducer';

import { actions, getRoles } from './features/user';

const { setToken } = actions;

export { setToken, getRoles };
