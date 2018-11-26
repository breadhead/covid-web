import cx from 'classnames'
import * as React from 'react'
import * as styles from './TopRow.css'

import Logo from '@app/ui/atoms/Logo'
import Button from '@app/ui/molecules/Button'
import Menu from '../Menu'

interface Props {
  className?: string
}

const TopRow = ({className}: Props) =>
  <div className={cx(styles.top, className)}>
    <Logo />
    <Menu />
    <div className={styles.buttons}>
      <Button wrapperClassName={styles.button} kind="secondary">Войти</Button>
      <Button wrapperClassName={styles.button} kind="primary">Просто спросить</Button>
    </div>
  </div>

export default TopRow
