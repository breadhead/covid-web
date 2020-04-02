import * as React from 'react';

import { Icon } from '@front/ui/icon';
import { IconsList } from '@front/ui/sprite';

import * as styles from './NavIcon.css';

const NavIcon = () => (
  <Icon className={styles.NavIcon} name={IconsList.ArrowRight} />
);

export default NavIcon;
