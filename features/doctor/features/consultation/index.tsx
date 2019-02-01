import createConsultationPage from '@app/features/common/consultation'
import { Controls, Layout } from '@app/features/manager'
import Claim from '@app/models/Claim/Claim'

import { Position } from '@app/features/manager/features/quotaControl/helpers/canEditClaim'
import Answer from './organisms/Answer'

const renderControls = ({ quota, mainInfo: { status } }: Claim) => (
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
    allowAnswerEditing={true}
  />
)

const renderControlsWithAnswer = (claim: Claim) => (
  <>
    <Answer claimId={claim.short.id} status={claim.mainInfo.status} />
    {renderFooterControls(claim)}
  </>
)

const DoctorConsultation = createConsultationPage(
  {
    renderSubHeader: renderControls,
    renderFooter: renderControlsWithAnswer,
  },
  Layout as any,
)

export default DoctorConsultation
