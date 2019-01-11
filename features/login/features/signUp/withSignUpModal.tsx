import { withModal, WithModalProps } from '@app/features/common/modal'
import { SIGN_UP_MODAL } from '@app/features/login'

export interface WithSignUpModal {
  openSignUp: () => void
}

const Container = (Component: React.ComponentType<any>) =>
  withModal(({ modal }: WithModalProps) => (
    <Component openSignUp={() => modal.open(SIGN_UP_MODAL)} />
  ))

export default Container