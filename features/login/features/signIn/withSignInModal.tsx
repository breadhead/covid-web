import { withModal, WithModalProps } from '@app/features/common/modal'
import { SIGN_IN_MODAL } from '@app/features/login'

export interface WithLoginModal {
  openSignIn: () => void
}

const Container = (Component: React.ComponentType<WithLoginModal>) =>
  withModal(({ modal, ...props }: WithModalProps) => (
    <Component {...props} openSignIn={() => modal.open(SIGN_IN_MODAL)} />
  ))

export default Container
