import * as React from 'react'

import * as styles from './Notification.css'

import { Button, ButtonKind } from '@front/ui/button'
import { NavLink } from '@front/ui/nav-link'

import { NON_BREAKING_SPACE } from '@app/lib/config'

const Notification = () => (
  <article className={styles.notification}>
    <img
      className={styles.logo}
      src="/static/images/doc-recommendation.png"
      alt="пожертвования"
    />
    <div className={styles.infoWrapper}>
      <p className={styles.text}>
        Наш проект существует на{NON_BREAKING_SPACE}частные и
        {NON_BREAKING_SPACE}корпоративные пожертвования. <br />
        Станьте нашим партнёром и{NON_BREAKING_SPACE}поддержите работу сервиса.
      </p>
      <NavLink withoutUnderline href="/contacts">
        <Button className={styles.button} kind={ButtonKind.Secondary}>
          Связаться с{NON_BREAKING_SPACE}нами
        </Button>
      </NavLink>
    </div>
  </article>
)

export default Notification
