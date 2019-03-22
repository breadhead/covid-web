import createConsultationPage from '@app/features/common/consultation'

import Layout from '../../organisms/Layout'
import Subheader from './organisms/Subheader'

const ClientConsultation = createConsultationPage(
  {
    renderSubHeader: ({ quota }: any) => <Subheader quotaClaim={quota} />,
  },
  Layout as any,
)

export default ClientConsultation

export { reducer, State } from '@app/features/common/consultation'

export {
  default as FinishModal,
  FINISH_MODAL_KEY,
} from './organisms/withFinishModal'
