import * as React from 'react';
import Head from 'next/head';
import cx from 'classnames';

export { default as notFoundMiddleware } from './notFoundMiddleware';
export { reducer } from './reducer';
export type { State } from './reducer';
export { getFound } from './selectors';

import StartConsultationButton from '@app/src/features/landing/features/home/molecules/StartConsultationButton';
import { NON_BREAKING_SPACE } from '@app/src/lib/config';
import { Button, ButtonKind, ButtonSize } from '@app/ui/button';
import { Icon } from '@app/ui/icon';
import { NavLink } from '@app/ui/nav-link';
import { IconsList } from '@app/ui/sprite';

import * as styles from './NotFound.css';

const NotFound = () => (
  <>
    <Head>
      <title>Такой страницы не существует | Просто спросить</title>
    </Head>
    <NavLink href="/" withoutUnderline>
      <Icon
        className={cx(styles.desktopLogo, styles.logo)}
        name={IconsList.LogoFull}
      />
      <Icon
        className={cx(styles.mobileLogo, styles.logo)}
        name={IconsList.LogoShort}
      />
    </NavLink>
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
        <StartConsultationButton size={ButtonSize.Large}>
          Начать консультацию
        </StartConsultationButton>
      </div>
    </div>
  </>
);

export default NotFound;
