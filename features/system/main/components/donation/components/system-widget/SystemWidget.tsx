import * as React from 'react';

import * as styles from './SystemWidget.css';

export const SystemWidget = () => {
  return (
    <article className={styles.widget}>
      <div className={styles.buttons}>
        <button>Помогать ежемесячно</button>
        <button>Разово</button>
      </div>
    </article>
  );
};
