import cx from 'classnames';
import * as React from 'react';

import { SPACE } from '@app/lib/config';
import { Icon } from '@app/ui/icon';
import { NavLink } from '@app/ui/nav-link';
import { IconsList } from '@app/ui/sprite';

import * as styles from './Dropdown.css';

export enum DropdownPositions {
  Left = 'left',
  Right = 'right',
  Center = 'center',
}
interface Props {
  position?: DropdownPositions;
  signOut: () => void;
}

const Dropdown = ({ signOut, position = DropdownPositions.Left }: Props) => (
  <div className={styles.dropdown}>
    <Icon className={styles.icon} name={IconsList.User} />
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
);

export default Dropdown;
