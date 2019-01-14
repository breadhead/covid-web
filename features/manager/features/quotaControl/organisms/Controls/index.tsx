import ClaimStatus from '@app/models/Claim/ClaimStatus'

import { WithQuotaTypeModal } from '../../../bindQuota'
import Buttons from '../../molecules/Buttons'
import Corporate from '../../molecules/Corporate'

import * as styles from './Controls.css'

interface Props extends WithQuotaTypeModal {
  allocationAvailable: boolean
  status: ClaimStatus
  allowEditing?: boolean
}

const Controls = ({
  openBindQuota,
  allocationAvailable,
  status,
  allowEditing = true,
}: Props) => (
  <div className={styles.plate}>
    <Buttons
      status={status}
      showBindQuota={allocationAvailable}
      openBindQuota={openBindQuota}
      allowEditing={allowEditing}
    />
    {allowEditing && <Corporate />}
  </div>
)

export default Controls
