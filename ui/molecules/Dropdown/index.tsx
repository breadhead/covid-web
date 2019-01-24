import cx from 'classnames'
import * as React from 'react'

import * as styles from './Dropdown.css'

import { SPACE } from '@app/lib/config'
import IconCustom from '@app/ui/atoms/IconCustom'
import NavLink from '@app/ui/atoms/NavLink'

export enum DropdownPositions {
  Left = 'left',
  Right = 'right',
  Center = 'center',
}
interface Props {
  position?: DropdownPositions
  signOut: () => void
}

const Dropdown = ({ signOut, position = DropdownPositions.Left }: Props) => (
  <div className={styles.dropdown}>
    <IconCustom className={styles.icon} name="24x24_user" />
    <div className={cx(styles.menu, styles[position])}>
      <NavLink href="https://nenaprasno.ru/" className={styles.menuItem}>
        Личный кабинет на{SPACE}
        <span className={styles.link}>nenaprasno.ru</span>
      </NavLink>
      <NavLink href="#" className={styles.menuItem}>
        <div onClick={signOut}>Выйти</div>
      </NavLink>
    </div>
  </div>
)

export default Dropdown
