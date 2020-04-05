import * as React from 'react';
import Head from 'next/head';
import cx from 'classnames';

export { default as notFoundMiddleware } from './notFoundMiddleware';
export { reducer } from './reducer';
export type { State } from './reducer';
export { getFound } from './selectors';

import StartConsultationButton from '@app/src/features/landing/features/home/molecules/StartConsultationButton';
import { NON_BREAKING_SPACE } from '@app/src/lib/config';
import { Button, ButtonKind, ButtonSize } from '@app/src/ui/button';
import { Icon } from '@app/src/ui/icon';
import { NavLink } from '@app/src/ui/nav-link';
import { IconsList } from '@app/src/ui/sprite';
import {
  SystemButton,
  SystemButtonSize,
  SystemButtonKind,
} from '@app/src/ui/systemButton ';

import * as styles from './NotFound.css';
import { SystemLayout } from '../../system/layout';

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
