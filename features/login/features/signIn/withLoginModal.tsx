import { withModal, WithModalProps } from '@app/features/common/modal'
import { SIGN_IN_MODAL } from '@app/features/login'

export interface WithLoginModal {
  openLogin: () => void
}

const Container = (Component: React.ComponentType<WithLoginModal>) =>
  withModal(({ modal, ...props }: WithModalProps) => (
    <Component openLogin={() => modal.open(SIGN_IN_MODAL)} {...props} />
  ))

export default Container
