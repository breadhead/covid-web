import * as React from 'react';

import * as styles from './Notification.css';

export const Notification = ({ children }) => (
  <article className={styles.notification}>
    <img
      className={styles.logo}
      src="/static/images/doc-recommendation.png"
      alt=""
    />
    <div className={styles.infoWrapper}>{children}</div>
  </article>
);
