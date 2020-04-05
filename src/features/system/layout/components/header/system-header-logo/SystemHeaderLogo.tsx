import React from 'react';
import cx from 'classnames';

import { NavLink } from '@app/src/ui/nav-link';
import { Icon } from '@app/src/ui/icon';
import { IconsList } from '@app/src/ui/sprite';

import * as styles from './SystemHeaderLogo.css';

interface SystemHeaderLogoProps {
  className?: string;
}
export const SystemHeaderLogo = ({ className }: SystemHeaderLogoProps) => {
  return (
    <NavLink
      className={cx(styles.iconWrapper, className)}
      withoutUnderline
      href="/"
    >
      <Icon name={IconsList.SystemLogo} />
    </NavLink>
  );
};
