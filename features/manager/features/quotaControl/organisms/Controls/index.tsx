import ClaimStatus from '@app/models/Claim/ClaimStatus'

import { WithQuotaTypeModal } from '../../../bindQuota'
import Buttons from '../../molecules/Buttons'
import Corporate from '../../molecules/Corporate'

import * as styles from './Controls.css'

interface Props extends WithQuotaTypeModal {
  allocationAvailable: boolean
  status: ClaimStatus
}

const Controls = ({ openBindQuota, allocationAvailable, status }: Props) => (
  <div className={styles.plate}>
    <Buttons
      status={status}
      showBindQuota={allocationAvailable}
      openBindQuota={openBindQuota}
    />
    <Corporate />
  </div>
)

export default Controls
