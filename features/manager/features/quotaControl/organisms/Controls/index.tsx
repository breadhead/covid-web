import ClaimStatus from '@app/models/Claim/ClaimStatus'
import { Doctor } from '@app/models/Users/Doctor'
import Button, { ButtonKind } from '@app/ui/atoms/Button'
import Router from 'next/router'
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
  <>
    {!!props.editClaim && (
      <Button
        className={styles.editClaimButton}
        onClick={() => Router.push(`/client/new-claim/${props.id}`)}
        kind={ButtonKind.Extra}
      >
        Редактировать заявку
      </Button>
    )}
    <div className={styles.plate}>
      <TopRow {...props} />
      {props.allowEditing && <BottomRow {...props} />}
    </div>{' '}
  </>
)

Controls.defaultProps = {
  allowEditing: true,
}

export default Controls
