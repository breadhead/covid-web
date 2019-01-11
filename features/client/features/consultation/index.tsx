import createConsultationPage from '@app/features/common/consultation'

import Layout from '../../organisms/Layout'
import ExpertAnswers from './organisms/ExpertAnswers'
import { Answers } from './organisms/ExpertAnswers/config'
import QuestionNotification from './organisms/QuestionNotification'
import Subheader from './organisms/Subheader'

const ClientConsultation = createConsultationPage(
  {
    renderSubHeader: quotaClaim => <Subheader quotaClaim={quotaClaim} />,
    renderFooter: () => <QuestionNotification />,
    renderAdditionalPlates: () => <ExpertAnswers answers={Answers} />,
  },
  Layout as any,
)

export default ClientConsultation

export { reducer, State } from '@app/features/common/consultation'
