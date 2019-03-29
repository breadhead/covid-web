import cx from 'classnames'
import * as React from 'react'

import * as styles from './Header.css'

import { Icon } from '@front/ui/icon'

interface Props {
  onCloseButtonClick?: () => void
}

const Header = ({ onCloseButtonClick }: Props) => (
  <header className={styles.header}>
    <button className={cx(styles.button, styles.buttonChat)}>
      <Icon className={styles.iconChat} name="32x32_chat" />
    </button>
    <h3 className={styles.title}>«Просто спросить»</h3>
    <button
      onClick={onCloseButtonClick}
      className={cx(styles.button, styles.closeButton)}
    >
      <Icon name="24x24_close_light" />
    </button>
  </header>
)

export default Header
