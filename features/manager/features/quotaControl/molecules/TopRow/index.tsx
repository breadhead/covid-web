import ClaimStatus from '@app/models/Claim/ClaimStatus'
import { Doctor } from '@app/models/Users/Doctor'
import Button, { ButtonKind } from '@app/ui/atoms/Button'
import Router from 'next/router'

import Status from '../../atoms/Status'
import { showSendToClientButton } from '../../helpers/showSendToClientButton'
import { showChooseDoctorButton as showSendToExpertButton } from '../../helpers/showSendToExpertButton'
import * as styles from './TopRow.css'
interface Props {
  nextStatus: () => void
  openBindQuota: () => void
  allocationAvailable: boolean
  openCloseClaim: () => void
  status: ClaimStatus
  allowEditing?: boolean
  trelloUrl?: string
  id: string
  editClaim?: boolean
  editAnswer?: boolean
  toQueue?: boolean
  assignedDoctor?: Doctor
  openChooseDoctor: () => void
}

const TopRow = ({
  openBindQuota,
  allocationAvailable,
  openCloseClaim,
  nextStatus,
  status,
  trelloUrl,
  allowEditing = true,
  editClaim,
  editAnswer,
  toQueue,
  openChooseDoctor,
  assignedDoctor,
  id,
}: Props) => {
  const closed = [ClaimStatus.Closed, ClaimStatus.Denied].includes(status)

  return (
    <>
      <div className={styles.buttons}>
        <div className={styles.left}>
          <Status>{status}</Status>
          {trelloUrl && (
            <Button
              onClick={() => window.open(trelloUrl, '_blank')}
              kind={ButtonKind.Extra}
            >
              Trello
            </Button>
          )}
        </div>
        {allowEditing && (
          <div className={styles.right}>
            {allocationAvailable && (
              <Button onClick={openBindQuota}>Выбрать квоту</Button>
            )}
            {!!toQueue && (
              <Button onClick={nextStatus} kind={ButtonKind.Extra}>
                В очередь
              </Button>
            )}
            {showSendToExpertButton(status, !!assignedDoctor) && (
              <Button onClick={openChooseDoctor}>Передать эксперту</Button>
            )}
            {showSendToClientButton(status) && (
              <Button onClick={nextStatus}>Передать заказчику</Button>
            )}
            {!closed && (
              <Button onClick={openCloseClaim} kind={ButtonKind.Extra}>
                Закрыть
              </Button>
            )}
          </div>
        )}
      </div>
      <div className={styles.buttons}>
        {!!editClaim && (
          <Button
            onClick={() => Router.push(`/client/new-claim/${id}`)}
            kind={ButtonKind.Extra}
          >
            Редактировать заявку
          </Button>
        )}
        {!!editAnswer && (
          <Button
            onClick={() => Router.push(`/doctor/answers/${id}`)}
            kind={ButtonKind.Extra}
          >
            Редактировать ответ
          </Button>
        )}
      </div>
    </>
  )
}

export default TopRow
