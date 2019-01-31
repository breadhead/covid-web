import ClaimStatus from '@app/models/Claim/ClaimStatus'
import Button, { ButtonKind } from '@app/ui/atoms/Button'
import Router from 'next/router'

import Status from '../../atoms/Status'
import * as styles from './Buttons.css'
interface Props {
  nextStatus: () => void
  openBindQuota: () => void
  showBindQuota: boolean
  openCloseClaim: () => void
  status: ClaimStatus
  allowEditing?: boolean
  trelloUrl?: string
  id: string
  editClaim?: boolean
  editAnswer?: boolean
  toQueue?: boolean
}

const defineNextStatusAction = (status: ClaimStatus) =>
  (({
    [ClaimStatus.QuestionnaireValidation]: 'Передать эксперту',
    [ClaimStatus.AnswerWaiting]: 'Передать заказчику',
  } as any)[status])

const Buttons = ({
  openBindQuota,
  showBindQuota,
  openCloseClaim,
  nextStatus,
  status,
  trelloUrl,
  allowEditing = true,
  editClaim,
  editAnswer,
  toQueue,
  id,
}: Props) => {
  const nextAction = defineNextStatusAction(status)
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
            {showBindQuota && (
              <Button onClick={openBindQuota}>Выбрать квоту</Button>
            )}
            {!!toQueue && (
              <Button onClick={nextStatus} kind={ButtonKind.Extra}>
                В очередь
              </Button>
            )}
            {nextAction && <Button onClick={nextStatus}>{nextAction}</Button>}
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

export default Buttons
