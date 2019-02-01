import createConsultationPage from '@app/features/common/consultation'
import { Controls, Layout } from '@app/features/manager'
import Claim from '@app/models/Claim/Claim'

import { Position } from '@app/features/manager/features/quotaControl/helpers/canEditClaim'
import Container from './container'
import Answers from './organisms/Answers'

const renderSubHeaderControls = ({ quota, mainInfo: { status } }: Claim) => (
  <Controls
    status={status}
    allocationAvailable={!!quota.empty}
    allowEditing={false}
  />
)
const renderFooterControls = ({ quota, mainInfo: { status } }: Claim) => (
  <Controls
    position={Position.Footer}
    status={status}
    allocationAvailable={!!quota.empty}
    allowEditing={false}
  />
)

const AnswersForm = Container(Answers)

const renderFooter = (claim: Claim) => (
  <>
    <AnswersForm claim={claim.questions} />
    {renderFooterControls(claim)}
  </>
)

const DoctorAnswers = createConsultationPage(
  {
    renderSubHeader: renderSubHeaderControls,
    renderFooter,
    hideAnswers: true,
  },
  Layout as any,
)

export default DoctorAnswers

export { reducer, State } from './reducer'
