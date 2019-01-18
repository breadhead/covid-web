import * as React from 'react'

export { default as notFoundMiddleware } from './notFoundMiddleware'

import Logo from '@app/ui/atoms/Logo'

import * as styles from './NotFound.css'

import StartConsultationButton from '@app/features/landing/features/home/molecules/StartConsultationButton'
import { NON_BREAKING_SPACE } from '@app/lib/config'
import Button, { ButtonKind } from '@app/ui/atoms/Button'
import NavLink, { NavLinkType } from '@app/ui/atoms/NavLink'

const NotFound = () => (
  <>
    <Logo className={styles.logo} />
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
        <NavLink className={styles.buttonMain} href="/" type={NavLinkType.Nav}>
          <Button kind={ButtonKind.Secondary}>Перейти на главную</Button>
        </NavLink>
        <StartConsultationButton className={styles.buttonConsult}>
          Начать консультацию
        </StartConsultationButton>
      </div>
    </div>
  </>
)

export default NotFound
