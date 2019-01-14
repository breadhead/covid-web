import createConsultationPage from '@app/features/common/consultation'
import { Controls, Layout } from '@app/features/manager'
import Claim from '@app/models/Claim/Claim'

const renderControls = ({ quota, mainInfo: { status } }: Claim) => (
  <Controls
    status={status}
    allocationAvailable={!!quota.empty}
    allowEditing={false}
  />
)

const DoctorAnswers = createConsultationPage(
  {
    renderSubHeader: renderControls,
    renderFooter: renderControls,
  },
  Layout as any,
)

export default DoctorAnswers
