import cx from 'classnames';
import * as React from 'react';

import { Icon } from '@app/src/ui/icon';
import { NavLink } from '@app/src/ui/nav-link';
import { IconsList } from '@app/src/ui/sprite';

import styles from './Logo.css';

interface Props {
  className?: string;
}

const LogoClient = ({ className }: Props) => (
  <NavLink className={styles.logoWrapper} withoutUnderline href="/">
    <Icon className={cx(styles.logo, className)} name={IconsList.LogoShort} />
  </NavLink>
);

export default LogoClient;
