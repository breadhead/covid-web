import * as React from 'react'
import { Button, ButtonKind } from '@app/src/ui/button'
import { NavLink } from '@app/src/ui/nav-link'
import styles from './Login.css'


const Login = () => (
  <div className={styles.buttons}>
    <NavLink
      className={styles.first}
      withoutUnderline
      blank
      href="http://faq.defeatcovid.ru/ru/"
    >
      <Button kind={ButtonKind.Secondary}>Справочник</Button>
    </NavLink>
    <NavLink withoutUnderline blank href="/request">
      <Button kind={ButtonKind.Secondary}>Консультация</Button>
    </NavLink>
  </div>
)

export default Login
