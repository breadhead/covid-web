import * as React from 'react'
import * as styles from '../../ClaimForm.css'

import { ButtonSize, ButtonType } from '@app/ui/atoms/Button'
import Button from '@app/ui/molecules/FormButton'

const Footer = () =>
  <article className={styles.article}>
    <Button
      size={ButtonSize.Large}
      type={ButtonType.Submit}
      className={styles.button}
    >
      Продолжить
    </Button>
  </article>

export default Footer
