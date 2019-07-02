import React from 'react'
import createConsultationPage from '@app/features/common/consultation'
import Claim from '@app/models/Claim/Claim'
import ClaimStatus from '@app/models/Claim/ClaimStatus'

import Layout from '../../organisms/Layout'
import Control from '../quotaControl'
import { Position } from '../quotaControl/helpers/canEditClaim'

const renderControlsSubHeader = ({ mainInfo: { status } }: Claim) => (
  <Control
    status={status}
    allocationAvailable={![ClaimStatus.Denied].includes(status)}
    allowAnswerEditing={true}
  />
)
const renderControlsFooter = ({ mainInfo: { status } }: Claim) => (
  <div>
    <Control
      position={Position.Footer}
      status={status}
      allocationAvailable={![ClaimStatus.Denied].includes(status)}
      allowAnswerEditing={true}
    />
  </div>
)

const ClientConsultation = createConsultationPage(
  {
    renderSubHeader: renderControlsSubHeader,
    renderFooter: renderControlsFooter,
  },
  Layout as any,
)

export default ClientConsultation
