import * as React from 'react';

import { Icon } from '@app/ui/icon';
import { IconsList } from '@app/ui/sprite';

import * as styles from './NavIcon.css';

const NavIcon = () => (
  <Icon className={styles.NavIcon} name={IconsList.ArrowRight} />
);

export default NavIcon;
