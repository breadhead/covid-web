import * as React from 'react'
import * as styles from '../../ClaimForm.css'

import Button, { ButtonSize, ButtonType } from '@app/ui/molecules/Button'

const Footer = () =>
  <article className={styles.article}>
    <Button
      size={ButtonSize.Large}
      type={ButtonType.Submit}
      classNames={{
        buttonClassName: styles.button,
      }}
    >
      Продолжить
    </Button>
  </article>

export default Footer
