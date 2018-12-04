import * as React from 'react'
import * as styles from '../../ClaimForm.css'

import { default as Button, Size, Type } from '@app/ui/molecules/Button'

const Footer = () =>
  <article className={styles.article}>
    <Button
      size={Size.l}
      type={Type.submit}
      classNames={{
        buttonClassName: styles.button,
      }}
    >
      Продолжить
    </Button>
  </article>

export default Footer
