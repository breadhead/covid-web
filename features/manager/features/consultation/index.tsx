import createConsultationPage from '@app/features/common/consultation'
import Claim from '@app/models/Claim/Claim'

import Layout from '../../organisms/Layout'
import Control from '../quotaControl'

const renderControls = ({ quota, mainInfo: { status } }: Claim) => (
  <Control status={status} allocationAvailable={!!quota.name} />
)

const ClientConsultation = createConsultationPage(
  {
    renderSubHeader: renderControls,
    renderFooter: renderControls,
  },
  Layout as any,
)

export default ClientConsultation
