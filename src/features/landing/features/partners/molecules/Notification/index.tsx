import * as React from 'react';

import { NON_BREAKING_SPACE } from '@app/src/lib/config';
import { Button, ButtonKind } from '@app/ui/button';
import { NavLink } from '@app/ui/nav-link';

import * as styles from './Notification.css';

const Notification = () => (
  <article className={styles.notification}>
    <img
      className={styles.logo}
      src="/static/images/doc-recommendation.png"
      alt="пожертвования"
    />
    <div className={styles.infoWrapper}>
      <p className={styles.text}>
        Наш проект существует на{NON_BREAKING_SPACE}частные и
        {NON_BREAKING_SPACE}корпоративные пожертвования. <br />
        Станьте нашим партнёром и{NON_BREAKING_SPACE}поддержите работу сервиса.
      </p>
      <NavLink withoutUnderline href="/contacts">
        <Button className={styles.button} kind={ButtonKind.Secondary}>
          Связаться с{NON_BREAKING_SPACE}нами
        </Button>
      </NavLink>
    </div>
  </article>
);

export default Notification;
