export {
  default as SignUpModal,
  MODAL_KEY as SIGN_UP_MODAL,
  withSignUpModal,
} from './features/signUp';
export type { WithSignUpModal } from './features/signUp';

export {
  default as SignInModal,
  MODAL_KEY as SIGN_IN_MODAL,
  withSignInModal as withLoginModal,
} from './features/signIn';
export type { WithSignInModal } from './features/signIn';
