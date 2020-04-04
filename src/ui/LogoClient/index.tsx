import cx from 'classnames';
import * as React from 'react';

import { Icon } from '@app/ui/icon';
import { NavLink } from '@app/ui/nav-link';
import { IconsList } from '@app/ui/sprite';

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
