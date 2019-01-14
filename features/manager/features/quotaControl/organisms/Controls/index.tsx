import ClaimStatus from '@app/models/Claim/ClaimStatus'

import { WithQuotaTypeModal } from '../../../bindQuota'
import { WithCloseClaimModal } from '../../../closeClaim'
import Buttons from '../../molecules/Buttons'
import Corporate from '../../molecules/Corporate'

import * as styles from './Controls.css'

interface Props extends WithQuotaTypeModal, WithCloseClaimModal {
  allocationAvailable: boolean
  status: ClaimStatus
  allowEditing?: boolean
}

const Controls = ({
  openBindQuota,
  openCloseClaim,
  allocationAvailable,
  status,
  allowEditing = true,
}: Props) => (
  <div className={styles.plate}>
    <Buttons
      status={status}
      showBindQuota={allocationAvailable}
      openBindQuota={openBindQuota}
      openCloseClaim={openCloseClaim}
      allowEditing={allowEditing}
    />
    {allowEditing && <Corporate />}
  </div>
)

export default Controls
