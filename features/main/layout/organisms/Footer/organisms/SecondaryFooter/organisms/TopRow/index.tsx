import cx from 'classnames'
import * as React from 'react'
import * as styles from './TopRow.css'

import Logo from '@app/ui/atoms/Logo'
import Menu from './organisms/Menu'

interface Props {
  className?: string
}

const TopRow = ({ className }: Props) =>
  <div className={cx(styles.top, className)}>
    <Logo className={styles.logo} />
    <Menu />
  </div>

export default TopRow
