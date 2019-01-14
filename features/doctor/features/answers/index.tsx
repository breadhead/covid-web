import createConsultationPage from '@app/features/common/consultation'
import { Controls, Layout } from '@app/features/manager'
import Claim from '@app/models/Claim/Claim'

import Container from './container'
import Answers from './organisms/Answers'

const renderControls = ({ quota, mainInfo: { status } }: Claim) => (
  <Controls
    status={status}
    allocationAvailable={!!quota.empty}
    allowEditing={false}
  />
)

const AnswersForm = Container(Answers)

const renderFooter = (claim: Claim) => (
  <>
    <AnswersForm claim={claim.questions} />
    {renderControls(claim)}
  </>
)

const DoctorAnswers = createConsultationPage(
  {
    renderSubHeader: renderControls,
    renderFooter,
    hideAnswers: true,
  },
  Layout as any,
)

export default DoctorAnswers

export { reducer, State } from './reducer'
