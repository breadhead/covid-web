import Button, { ButtonKind } from '@app/ui/atoms/Button'

import Status from '../../atoms/Status'
import * as styles from './Buttons.css'

interface Props {
  openBindQuota: () => void
}

const Buttons = ({ openBindQuota }: Props) => (
  <div className={styles.buttons}>
    <div className={styles.left}>
      <Status />
      <Button kind={ButtonKind.Extra}>Trello</Button>
    </div>
    <div className={styles.right}>
      <Button onClick={openBindQuota}>Выбрать квоту</Button>
      <Button kind={ButtonKind.Extra}>В очередь</Button>
      <Button kind={ButtonKind.Extra}>Закрыть</Button>
    </div>
  </div>
)

export default Buttons
