import * as React from 'react';
import Head from 'next/head';
import cx from 'classnames';

export { default as notFoundMiddleware } from './notFoundMiddleware';
export { reducer } from './reducer';
export type { State } from './reducer';
export { getFound } from './selectors';

import StartConsultationButton from '@app/src/features/landing/features/home/molecules/StartConsultationButton';
import { NON_BREAKING_SPACE } from '@app/src/lib/config';
import { Icon } from '@app/src/ui/icon';
import { NavLink } from '@app/src/ui/nav-link';
import { IconsList } from '@app/src/ui/sprite';
import { Button, ButtonSize, ButtonKind } from '@app/src/ui/button';

import * as styles from './NotFound.css';
import { SystemLayout } from '../../system/layout';

const NotFound = () => (
  <>
    <Head>
      <title>Такой страницы не существует | Просто спросить</title>
    </Head>

    <SystemLayout headerWhite withoutFooter>
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
