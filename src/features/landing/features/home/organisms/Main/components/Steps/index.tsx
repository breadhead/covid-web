import * as React from 'react';
import Link from 'next/link';

import {NON_BREAKING_SPACE, SPACE} from '@app/src/lib/config';

import * as styles from './Steps.css';

const Steps = () => (
  <div className={styles.wrap}>
    <h2 className={styles.title}>Как работает персональная консультация</h2>
    <section className={styles.steps}>
      <article className={styles.step}>
        <img
          className={styles.img}
          src="/static/images/process_step-1.png"
          alt="Пройдите короткий тест и получите рекомендации"
        />
        <p className={styles.text}>
          1. Пройдите{' '}
          <Link href="/request">
            <a className={styles.link}>короткий{NON_BREAKING_SPACE}тест</a>
          </Link>
          {SPACE}и{NON_BREAKING_SPACE}получите рекомендации
        </p>
      </article>
      <article className={styles.step}>
        <img
          className={styles.img}
          src="/static/images/process_step-2.png"
          alt="Если останутся вопросы, задайте их в чате"
        />
        <p className={styles.text}>
          2. Если останутся вопросы, задайте их в чате
        </p>
      </article>
      <article className={styles.step}>
        <img
          className={styles.img}
          src="/static/images/process_step-3.png"
          alt="Подождите пока эксперт ответит вам"
        />
        <p className={styles.text}>3. Подождите пока эксперт ответит вам</p>
      </article>
    </section>
  </div>
);

export default Steps;
