import { withModal, WithModalProps } from '@app/features/common/modal'
import { MODAL_KEY } from './container'

export interface WithCloseClaimModal {
  openCloseClaim: () => void
}

const Container = (Component: React.ComponentType<any>) =>
  withModal(({ modal, ...rest }: WithModalProps) => (
    <Component openCloseClaim={() => modal.open(MODAL_KEY)} {...rest} />
  ))

export default Container
