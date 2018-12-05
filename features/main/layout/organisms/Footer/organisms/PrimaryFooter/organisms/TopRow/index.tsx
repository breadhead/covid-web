import cx from 'classnames'
import * as React from 'react'
import * as styles from './TopRow.css'

import Button, { ButtonKind } from '@app/ui/molecules/Button'

import Logo from '@app/ui/atoms/Logo'
import Menu from '../Menu'

interface Props {
  className?: string
}

const TopRow = ({ className }: Props) =>
  <div className={cx(styles.top, className)}>
    <Logo />
    <Menu />
    <div className={styles.buttons}>
      <Button classNames={{ wrapperClassName: styles.button }} kind={ButtonKind.Secondary}>Войти</Button>
      <Button classNames={{ wrapperClassName: styles.button }}>Просто спросить</Button>
    </div>
  </div >

export default TopRow
