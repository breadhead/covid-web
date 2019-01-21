import { withModal, WithModalProps } from '@app/features/common/modal'
import { SIGN_IN_MODAL } from '@app/features/login'

export interface WithSignUpModal {
  openSignUp: () => void
}

const Container = (Component: React.ComponentType<any>) =>
  withModal(({ modal, ...props }: WithModalProps) => (
    <Component {...props} openSignUp={() => modal.open(SIGN_IN_MODAL)} />
  ))

export default Container
