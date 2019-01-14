import ClaimStatus from '@app/models/Claim/ClaimStatus'
import Button, { ButtonKind } from '@app/ui/atoms/Button'

import Status from '../../atoms/Status'
import * as styles from './Buttons.css'
interface Props {
  openBindQuota: () => void
  showBindQuota: boolean
  status: ClaimStatus
  allowEditing?: boolean
}

const defineNextStatusAction = (status: ClaimStatus) =>
  (({
    [ClaimStatus.QuestionnaireValidation]: 'Передать эксперту',
    [ClaimStatus.AnswerWaiting]: 'Передать заказчику',
  } as any)[status])

const Buttons = ({
  openBindQuota,
  showBindQuota,
  status,
  allowEditing = true,
}: Props) => {
  const nextAction = defineNextStatusAction(status)
  const closed = status === ClaimStatus.Closed

  return (
    <div className={styles.buttons}>
      <div className={styles.left}>
        <Status>{status}</Status>
        <Button kind={ButtonKind.Extra}>Trello</Button> {/* TODO: action */}
      </div>
      {allowEditing && (
        <div className={styles.right}>
          {showBindQuota && (
            <>
              <Button onClick={openBindQuota}>Выбрать квоту</Button>
              <Button kind={ButtonKind.Extra}>В очередь</Button>{' '}
              {/* TODO: action */}
            </>
          )}
          {nextAction && <Button>{nextAction}</Button>} {/* TODO: action */}
          {!closed && <Button kind={ButtonKind.Extra}>Закрыть</Button>}{' '}
          {/* TODO: action */}
        </div>
      )}
    </div>
  )
}

export default Buttons
