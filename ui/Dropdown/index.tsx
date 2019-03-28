import cx from 'classnames'
import * as React from 'react'

import * as styles from './Dropdown.css'

import { SPACE } from '@app/lib/config'
import IconCustom from '@app/ui/IconCustom'
import { NavLink } from '@front/ui/nav-link'

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
      <NavLink
        blank
        href="https://cabinet.nenaprasno.ru"
        className={styles.menuItem}
      >
        Личный кабинет на{SPACE}
        <span className={styles.link}>nenaprasno.ru</span>
      </NavLink>
      <div onClick={signOut} className={styles.menuItem}>
        Выйти
      </div>
    </div>
  </div>
)

export default Dropdown
