import Button, { ButtonKind } from '@app/ui/atoms/Button'

import Messages from '../../atoms/Messages'
import Point from '../../atoms/Point'
import styles from './ClaimStatus.css'

const Status = () => {
  const active = true

  return (
    <div className={styles.container}>
      <Point active={active} className={styles.point} />
      <Messages active={active} />
      <Button kind={active ? ButtonKind.Primary : ButtonKind.Secondary}>
        Заполнить
      </Button>
    </div>
  )
}

export default Status
