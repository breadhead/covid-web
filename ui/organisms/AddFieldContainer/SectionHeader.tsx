import { ButtonType } from '@app/ui/atoms/Button'
import IconCustom from '@app/ui/atoms/IconCustom'
import * as styles from './SectionHeader.css'

export interface SectionHeaderProps {
  index: number
  onRemoveClick: () => void
}

const SectionHeader: React.SFC<SectionHeaderProps> = ({
  index,
  onRemoveClick,
}) => {
  switch (index) {
    case 0:
      return null
    case 1:
      return (
        <div className={styles.header}>
          <p className={styles.text}>Ещё</p>
          <button
            className={styles.button}
            type={ButtonType.Button}
            onClick={onRemoveClick}
          >
            <IconCustom className={styles.icon} name="24x24_close_blue" />
            <span>Удалить</span>
          </button>
        </div>
      )

    default:
      return (
        <div className={styles.header}>
          <button
            type={ButtonType.Button}
            className={styles.button}
            onClick={onRemoveClick}
          >
            <IconCustom className={styles.icon} name="24x24_close_blue" />
            <span>Удалить</span>
          </button>
        </div>
      )
  }
}

export default SectionHeader
