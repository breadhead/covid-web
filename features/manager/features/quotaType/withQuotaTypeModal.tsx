import { withModal, WithModalProps } from '@app/features/common/modal'
import { MODAL_KEY } from './container'

export interface WithQuotaTypeModal {
  openQuotaType: () => void
}

const Container = (Component: React.ComponentType<any>) =>
  withModal(({ modal }: WithModalProps) => (
    <Component openQuotaType={() => modal.open(MODAL_KEY)} />
  ))

export default Container
