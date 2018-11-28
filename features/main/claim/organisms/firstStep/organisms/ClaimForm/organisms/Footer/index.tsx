import * as React from 'react'
import * as styles from '../../ClaimForm.css'

import Button from '@app/ui/molecules/Button'

const Footer = () =>
  <article className={styles.article}>
    <Button
      size="l"
      type="submit"
      classNames={{
        buttonClassName: styles.button,
      }}
    >
      Продолжить
    </Button>
  </article>

export default Footer
