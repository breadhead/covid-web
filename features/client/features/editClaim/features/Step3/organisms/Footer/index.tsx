import * as React from 'react'

import { StylesType } from '@app/lib/config'
import Button, { ButtonSize, ButtonType } from '@app/ui/atoms/Button'
import IconCustom from '@app/ui/atoms/IconCustom'
import NavLink from '@app/ui/atoms/NavLink'

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
    <div className={styles.footerBack}>
      <IconCustom className={styles.iconBack} name="24x24_arrow-small_right" />
      <NavLink href="#">Вернуться назад</NavLink>
    </div>
  </footer>
)

export default Footer
