import cx from 'classnames';
import * as React from 'react';

import { Icon } from '@app/src/ui/icon';
import { NavLink } from '@app/src/ui/nav-link';
import { IconsList } from '@app/src/ui/sprite';

import styles from './Logo.css';

interface Props {
  className?: string;
  wrapperClassName?: string;
}

const Logo = ({ className, wrapperClassName }: Props) => (
  <NavLink
    className={cx(styles.logo, wrapperClassName)}
    withoutUnderline
    href="/"
  >
    <Icon className={cx(styles.logo, className)} name={IconsList.CovidLogo} />
    <Icon className={styles.logoMobile} name={IconsList.CovidLogoMobile} />
  </NavLink>
);

export default Logo;
