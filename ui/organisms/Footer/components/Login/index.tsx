import * as React from 'react'
import { Button, ButtonSize, ButtonKind } from '@app/src/ui/button'
import { NavLink } from '@app/src/ui/nav-link'
import styles from './Login.css'

// import LoginButton from '@app/features/main/layout/organisms/Header/atoms/LoginButton'

// interface Props {
//   showLoginButton: boolean
// }

const Login = () => (
  <div className={styles.buttons}>
    <NavLink
      className={styles.first}
      withoutUnderline
      blank
      href="http://faq.defeatcovid.ru/ru/"
    >
      <Button kind={ButtonKind.Secondary}>
        Справочник
      </Button>
    </NavLink>
    <NavLink
      withoutUnderline
      blank
      href="/request"
    >
      <Button kind={ButtonKind.Secondary}>
        Консультация
      </Button>
    </NavLink>
  </div>
)

export default Login
