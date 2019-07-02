export {
  default as SmsConfirmModal,
  MODAL_KEY as SMS_CONFIRM_MODAL,
} from './features/confirm'

export {
  default as SignUpModal,
  MODAL_KEY as SIGN_UP_MODAL,
  withSignUpModal,
  WithSignUpModal,
} from './features/signUp'

export { getToken } from './features/user'

export {
  default as SignInModal,
  MODAL_KEY as SIGN_IN_MODAL,
  unauthorizedMiddleware,
  authViolateStatus,
  getViolateState,
  withSignInModal as withLoginModal,
  WithLoginModal,
} from './features/signIn'

export { State, reducer } from './reducer'

import { actions, getRoles } from './features/user'

const { setToken } = actions

export { setToken, getRoles }
