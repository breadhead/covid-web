import React from 'react'
import ClaimStatus from '@app/models/Claim/ClaimStatus'
import { Doctor } from '@app/models/Users/Doctor'
import { Button, ButtonKind } from '@front/ui/button'

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
  quotaName?: string
}

const TopRow = ({
  openBindQuota,
  allocationAvailable,
  openCloseClaim,
  nextStatus,
  status,
  trelloUrl,
  allowEditing = true,
  toQueue,
  openChooseDoctor,
  quotaName,
  assignedDoctor,
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
              className={styles.button}
            >
              Trello
            </Button>
          )}
        </div>
        {allowEditing && (
          <div className={styles.right}>
            {allocationAvailable && !quotaName && (
              <Button className={styles.button} onClick={openBindQuota}>
                Выбрать квоту
              </Button>
            )}
            {!!toQueue && (
              <Button
                className={styles.button}
                onClick={nextStatus}
                kind={ButtonKind.Extra}
              >
                В очередь
              </Button>
            )}
            {showSendToExpertButton(status, !!assignedDoctor) && (
              <Button className={styles.button} onClick={openChooseDoctor}>
                Передать эксперту
              </Button>
            )}
            {showSendToClientButton(status) && (
              <Button className={styles.button} onClick={nextStatus}>
                Передать заказчику
              </Button>
            )}
            {!closed && (
              <Button
                className={styles.button}
                onClick={openCloseClaim}
                kind={ButtonKind.Extra}
              >
                Закрыть
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default TopRow
