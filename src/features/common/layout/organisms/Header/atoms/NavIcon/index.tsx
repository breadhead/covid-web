import * as React from 'react';

import { Icon } from '@app/src/ui/icon';
import { IconsList } from '@app/src/ui/sprite';

import * as styles from './NavIcon.css';

const NavIcon = () => (
  <Icon className={styles.NavIcon} name={IconsList.ArrowRight} />
);

export default NavIcon;
