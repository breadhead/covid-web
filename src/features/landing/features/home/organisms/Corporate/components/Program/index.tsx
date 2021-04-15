import * as React from 'react';

import { NON_BREAKING_SPACE } from '@app/src/lib/config';

import * as styles from './Program.css';

const Program = () => (
  <section className={styles.program}>
    <div className={styles.topic}>
      <h2 className={styles.title}>Программа корпоративных консультаций</h2>
      <img
        loading="lazy"
        className={styles.logo}
        src="/static/images/corporate.png"
        alt="Программа корпоративных консультаций"
      />
    </div>
    <p className={styles.text}>
      Мы даем возможность компаниям оплачивать консультации своим сотрудникам.
      <br />
      <br />
      Если ваш работодатель участвует в{NON_BREAKING_SPACE}нашей корпоративной
      программе, то вы можете получить консультацию как сотрудник по
      {NON_BREAKING_SPACE}специальному приглашению.
    </p>
  </section>
);

export default Program;
