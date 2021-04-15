import Head from 'next/head';
import * as React from 'react';

import { NON_BREAKING_SPACE } from '@app/src/lib/config';
import { Button, ButtonKind, ButtonSize } from '@app/src/ui/button';
import { NavLink } from '@app/src/ui/nav-link';

import { SystemLayout } from '../../system/layout';
import * as styles from './NotFound.css';

export { default as notFoundMiddleware } from './notFoundMiddleware';
export { reducer } from './reducer';
export type { State } from './reducer';
export { getFound } from './selectors';

const NotFound = () => (
  <>
    <Head>
      <title>Такой страницы не существует | Что делать:</title>
    </Head>

    <SystemLayout headerWhite withoutFooter>
      <div className={styles.container}>
        <img
          loading="lazy"
          className={styles.image}
          src="/static/images/404.png"
          alt="Такой страницы не существует"
        />
        <p className={styles.text}>404 ошибка</p>
        <h1 className={styles.title}>
          Такой страницы не{NON_BREAKING_SPACE}существует
        </h1>
        <div className={styles.buttons}>
          <NavLink className={styles.buttonMain} href="/" withoutUnderline>
            <Button size={ButtonSize.Large} kind={ButtonKind.Secondary}>
              Перейти на главную
            </Button>
          </NavLink>
        </div>
      </div>
    </SystemLayout>
  </>
);

export default NotFound;
