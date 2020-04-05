import * as React from 'react';
import Head from 'next/head';
import {NON_BREAKING_SPACE} from '@app/src/lib/config';
import {NavLink} from '@app/src/ui/nav-link';
import {SystemButton, SystemButtonKind, SystemButtonSize,} from '@app/src/ui/systemButton ';

import * as styles from './NotFound.css';
import {SystemLayout} from '../../system/layout';

export { default as notFoundMiddleware } from './notFoundMiddleware';
export { reducer } from './reducer';
export type { State } from './reducer';
export { getFound } from './selectors';

const NotFound = () => (
  <>
    <Head>
      <title>Такой страницы не существует | Просто спросить</title>
    </Head>

    <SystemLayout withoutFooter>
      <div className={styles.container}>
        <img
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
            <SystemButton
              size={SystemButtonSize.Large}
              kind={SystemButtonKind.Secondary}
            >
              Перейти на главную
            </SystemButton>
          </NavLink>
        </div>
      </div>
    </SystemLayout>
  </>
);

export default NotFound;
