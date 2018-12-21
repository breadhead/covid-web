import * as React from 'react'

import { Button } from '@app/features/common/form'
import { StylesType } from '@app/lib/config'
import { ButtonSize, ButtonType } from '@app/ui/atoms/Button'

interface Props {
  styles: StylesType
}

const Footer = ({ styles }: Props) => (
  <footer className={styles.article}>
    <Button
      size={ButtonSize.Large}
      type={ButtonType.Submit}
      className={styles.button}
    >
      Продолжить
    </Button>
  </footer>
)

export default Footer
