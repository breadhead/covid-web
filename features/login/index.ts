export {
  default as SmsConfirmModal,
  MODAL_KEY as SMS_CONFIRM_MODAL,
} from './features/confirm'

export {
  default as SignUpModal,
  MODAL_KEY as SIGN_UP_MODAL,
} from './features/signUp'

export { getToken } from './features/token'

export {
  default as SignInModal,
  MODAL_KEY as SIGN_IN_MODAL,
  unauthorizedMiddleware,
  authViolateStatus,
  getViolateState,
  withLoginModal,
  WithLoginModal,
} from './features/signIn'

export { State, reducer } from './reducer'

import { actions } from './features/token'

const setToken = actions.set

export { setToken }
