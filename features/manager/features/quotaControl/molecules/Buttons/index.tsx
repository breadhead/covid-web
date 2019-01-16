import ClaimStatus from '@app/models/Claim/ClaimStatus'
import Button, { ButtonKind } from '@app/ui/atoms/Button'

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
}: Props) => {
  const nextAction = defineNextStatusAction(status)
  const closed = status === ClaimStatus.Closed

  return (
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
            <>
              <Button onClick={openBindQuota}>Выбрать квоту</Button>
              <Button kind={ButtonKind.Extra}>В очередь</Button>
              {/* TODO: action */}
            </>
          )}
          {nextAction && <Button onClick={nextStatus}>{nextAction}</Button>}{' '}
          {/* TODO: action */}
          {!closed && (
            <Button onClick={openCloseClaim} kind={ButtonKind.Extra}>
              Закрыть
            </Button>
          )}
        </div>
      )}
    </div>
  )
}

export default Buttons
