import { withModal, WithModalProps } from '@app/features/common/modal'
import { FINISH_MODAL_KEY } from './container'

export interface WithFinishModal {
  openFinishModal: () => void
}

const Container = (Component: React.ComponentType<WithFinishModal>) =>
  withModal(({ modal, ...props }: WithModalProps) => (
    <Component
      openFinishModal={() => modal.open(FINISH_MODAL_KEY)}
      {...props}
    />
  ))

export default Container
