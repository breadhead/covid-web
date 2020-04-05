import * as React from 'react';
import cx from 'classnames';

import {Icon} from '@app/src/ui/icon';
import {IconsList} from '@app/src/ui/sprite';

import * as styles from './NavIcon.css';

interface Props {
  long?: boolean;
}

const NavIcon = ({ long = false }: Props) => (
  <Icon
    className={cx(styles.NavIcon, long && styles.long)}
    name={IconsList.ArrowRight}
  />
);

export default NavIcon;
