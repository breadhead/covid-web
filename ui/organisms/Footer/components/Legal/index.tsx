import cx from 'classnames';
import * as React from 'react';

import { NON_BREAKING_SPACE } from '@app/lib/config';

import { NavLink } from '@app/ui/nav-link';

import * as styles from './Legal.css';

interface Props {
  className?: string;
}

const Legal = ({ className }: Props) => (
  <div className={cx(styles.bottom, className)}>
    <div className={styles.oncohelp}>
      <span className={styles.copyright}>© Фонд профилактики рака, 2020</span>
      <NavLink
        blank
        className={styles.infoLink}
        withoutUnderline
        href="/static/docs/terms-of-use.pdf"
      >
        Пользовательское соглашение
      </NavLink>
    </div>
    <span className={styles.breadhead}>
      <span className={styles.secondaryText}>
        Сайт сделан в{NON_BREAKING_SPACE}
      </span>
      <NavLink blank className={styles.infoLink} href="https://breadhead.ru/">
        Breadhead
      </NavLink>
    </span>
  </div>
);

export default Legal;
