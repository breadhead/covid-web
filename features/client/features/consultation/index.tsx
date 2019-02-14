import createConsultationPage from '@app/features/common/consultation'

import Layout from '../../organisms/Layout'
import QuestionNotification from './organisms/QuestionNotification'
import Subheader from './organisms/Subheader'

const ClientConsultation = createConsultationPage(
  {
    renderSubHeader: ({ quota }: any) => <Subheader quotaClaim={quota} />,
    renderFooter: () => <QuestionNotification />,
  },
  Layout as any,
)

export default ClientConsultation

export { reducer, State } from '@app/features/common/consultation'

export {
  default as FinishModal,
  MODAL_KEY as FINISH_MODAL_KEY,
} from './organisms/withFinishModal'
