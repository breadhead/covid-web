import * as React from 'react'

import * as styles from './Notification.css'

import Button, { ButtonKind } from '@app/ui/atoms/Button'

import { NON_BREAKING_SPACE } from '@app/lib/config'

const Notification = () => (
  <article className={styles.notification}>
    <img
      className={styles.logo}
      src="http://placecorgi.com/72/64"
      alt="экспертка"
    />
    <div className={styles.infoWrapper}>
      <p className={styles.text}>
        Наш проект существует на{NON_BREAKING_SPACE}частные и
        {NON_BREAKING_SPACE}корпоративные пожертвования. <br />
        Станьте нашим партнером и{NON_BREAKING_SPACE}поддержите работу сервиса.
      </p>
      <Button className={styles.button} kind={ButtonKind.Secondary}>
        Связаться с нами
      </Button>
    </div>
  </article>
)

export default Notification
