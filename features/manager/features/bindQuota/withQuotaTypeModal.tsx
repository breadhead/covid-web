import { withModal, WithModalProps } from '@app/features/common/modal'
import { MODAL_KEY } from './container'

export interface WithBindQuotaModal {
  openBindQuota: () => void
}

const Container = (Component: React.ComponentType<any>) =>
  withModal(({ modal }: WithModalProps) => (
    <Component openBindQuota={() => modal.open(MODAL_KEY)} />
  ))

export default Container
