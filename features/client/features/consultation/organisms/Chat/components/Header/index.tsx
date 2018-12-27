import cx from 'classnames'
import * as React from 'react'

import * as styles from './Header.css'

import IconCustom from '@app/ui/atoms/IconCustom'

interface Props {
  onCloseButtonClick?: () => void
}

const Header = ({ onCloseButtonClick }: Props) => (
  <header className={styles.header}>
    <button className={cx(styles.button, styles.buttonChat)}>
      <IconCustom className={styles.iconChat} name="32x32_chat" />
    </button>
    <h3 className={styles.title}>«Просто спросить»</h3>
    <button
      onClick={onCloseButtonClick}
      className={cx(styles.button, styles.closeButton)}
    >
      <IconCustom name="24x24_close_light" />
    </button>
  </header>
)

export default Header
