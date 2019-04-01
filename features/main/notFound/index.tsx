import * as React from 'react'

import Head from 'next/head'

import cx from 'classnames'

export { default as notFoundMiddleware } from './notFoundMiddleware'
export { State, reducer } from './reducer'
export { getFound } from './selectors'

import * as styles from './NotFound.css'

import StartConsultationButton from '@app/features/landing/features/home/molecules/StartConsultationButton'
import { NON_BREAKING_SPACE } from '@app/lib/config'
import { Button, ButtonKind, ButtonSize } from '@front/ui/button'
import { Icon } from '@front/ui/icon'
import { NavLink } from '@front/ui/nav-link'
import { IconsList } from '@front/ui/sprite'

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
)

export default NotFound
