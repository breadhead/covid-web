import cx from 'classnames';
import * as React from 'react';

import { NON_BREAKING_SPACE } from '@app/src/lib/config';
import { NavLink } from '@app/src/ui/nav-link';

import * as styles from './Legal.css';

interface Props {
  className?: string;
}

const Legal = ({ className }: Props) => (
  <div className={cx(styles.bottom, className)}>
    <div className={styles.oncohelp}>
      <span className={styles.copyright}>© Фонд медицинских решений «Не напрасно», { (new Date()).getFullYear()}</span>
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
