import cx from 'classnames'
import * as React from 'react'
import * as styles from './TopRow.css'

import { ButtonKind } from '@app/ui/atoms/Button'
import Button from '@app/ui/molecules/FormButton'

import Logo from '@app/ui/atoms/Logo'
import Menu from '../Menu'

interface Props {
  className?: string
}

const TopRow = ({ className }: Props) => (
  <div className={cx(styles.top, className)}>
    <Logo />
    <Menu />
    <div className={styles.buttons}>
      <Button wrapperClassName={styles.button} kind={ButtonKind.Secondary}>
        Войти
      </Button>
      <Button wrapperClassName={styles.button}>Просто спросить</Button>
    </div>
  </div>
)

export default TopRow
