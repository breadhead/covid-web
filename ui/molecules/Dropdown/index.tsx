import cx from 'classnames'
import * as React from 'react'

import * as styles from './Dropdown.css'

import { SPACE } from '@app/lib/config'
import IconCustom from '@app/ui/atoms/IconCustom'
import NavLink from '@app/ui/atoms/NavLink'
import ExternalLink from '../ExternalLink'

export enum DropdownPositions {
  Left = 'left',
  Right = 'right',
  Center = 'center',
}
interface Props {
  position?: DropdownPositions
}

const Dropdown = ({ position = DropdownPositions.Left }: Props) => (
  <div className={styles.dropdown}>
    <IconCustom name="24x24_user" />
    <div className={cx(styles.menu, styles[position])}>
      <NavLink href="#" className={styles.menuItem}>
        Личный кабинет на{SPACE}
        <ExternalLink className={styles.link} href="https://nenaprasno.ru/">
          nenaprasno.ru
        </ExternalLink>
      </NavLink>
      <NavLink href="#" className={styles.menuItem}>
        Выйти
      </NavLink>
    </div>
  </div>
)

export default Dropdown
