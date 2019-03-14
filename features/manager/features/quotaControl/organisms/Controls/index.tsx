import ClaimStatus from '@app/models/Claim/ClaimStatus'
import { Doctor } from '@app/models/Users/Doctor'
import { Button, ButtonKind } from '@front/ui/button'
import Router from 'next/router'
import { WithQuotaTypeModal } from '../../../bindQuota'
import { WithChooseDoctorModal } from '../../../chooseDoctor'
import { WithCloseClaimModal } from '../../../closeClaim'
import BottomRow from '../../molecules/BottomRow'
import CommentRow from '../../molecules/CommentRow'
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
  quotaName?: string
  closeComment?: string
}

const Controls = (props: Props) => (
  <>
    {!!props.editClaim && (
      <Button
        className={styles.button}
        onClick={() => Router.push(`/manager/new-claim/${props.id}`)}
        kind={ButtonKind.Extra}
      >
        Редактировать заявку
      </Button>
    )}
    {!!props.editAnswer && (
      <Button
        className={styles.button}
        onClick={() => Router.push(`/doctor/answers/${props.id}`)}
        kind={ButtonKind.Extra}
      >
        Редактировать ответ
      </Button>
    )}
    <div className={styles.plate}>
      <TopRow {...props} />
      <CommentRow comment={props.closeComment} />
      {props.allowEditing && <BottomRow {...props} />}
    </div>{' '}
  </>
)

Controls.defaultProps = {
  allowEditing: true,
}

export default Controls
