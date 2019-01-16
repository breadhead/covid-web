import { withModal, WithModalProps } from '@app/features/common/modal'
import { MODAL_KEY } from './container'

export interface WithFinishModal {
  openFinishModal: () => void
}

const Container = (Component: React.ComponentType<WithFinishModal>) =>
  withModal(({ modal, ...props }: WithModalProps) => (
    <Component openFinishModal={() => modal.open(MODAL_KEY)} {...props} />
  ))

export default Container
