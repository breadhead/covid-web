import ClaimStatus from '@app/models/Claim/ClaimStatus'

import { Doctor } from '@app/models/Users/Doctor'
import { WithQuotaTypeModal } from '../../../bindQuota'
import { WithChooseDoctorModal } from '../../../chooseDoctor'
import { WithCloseClaimModal } from '../../../closeClaim'
import BottomRow from '../../molecules/BottomRow'
import TopRow from '../../molecules/TopRow'
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
  id: string
  editClaim: boolean
  editAnswer: boolean
  toQueue: boolean
}

const Controls = (props: Props) => (
  <div className={styles.plate}>
    <TopRow {...props} />
    {props.allowEditing && <BottomRow {...props} />}
  </div>
)

Controls.defaultProps = {
  allowEditing: true,
}

export default Controls
