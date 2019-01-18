import ClaimStatus from '@app/models/Claim/ClaimStatus'

import { Doctor } from '@app/models/Users/Doctor'
import { WithQuotaTypeModal } from '../../../bindQuota'
import { WithChooseDoctorModal } from '../../../chooseDoctor'
import { WithCloseClaimModal } from '../../../closeClaim'
import Buttons from '../../molecules/Buttons'
import Corporate from '../../molecules/Corporate'
import * as styles from './Controls.css'

interface Props
  extends WithQuotaTypeModal,
    WithCloseClaimModal,
    WithChooseDoctorModal {
  allocationAvailable: boolean
  status: ClaimStatus
  allowEditing?: boolean
  nextStatus: () => void
  trelloUrl?: string
  assignedDoctor?: Doctor
}

const Controls = ({
  openBindQuota,
  openCloseClaim,
  openChooseDoctor,
  allocationAvailable,
  status,
  nextStatus,
  trelloUrl,
  allowEditing = true,
  assignedDoctor,
}: Props) => (
  <div className={styles.plate}>
    <Buttons
      trelloUrl={trelloUrl}
      nextStatus={nextStatus}
      status={status}
      showBindQuota={allocationAvailable}
      openBindQuota={openBindQuota}
      openCloseClaim={openCloseClaim}
      allowEditing={allowEditing}
    />
    {allowEditing && (
      <Corporate
        assignedDoctor={assignedDoctor}
        openChooseDoctor={openChooseDoctor}
      />
    )}
  </div>
)

export default Controls
