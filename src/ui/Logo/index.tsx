import cx from 'classnames';
import * as React from 'react';

import { Icon } from '@app/ui/icon';
import { NavLink } from '@app/ui/nav-link';
import { IconsList } from '@app/ui/sprite';

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
