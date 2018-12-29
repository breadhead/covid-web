import * as React from 'react'

import {
  ButtonSize,
  ButtonType,
  ButtonWithTooltip,
} from '@app/features/common/form'
import { StylesType } from '@app/lib/config'
import IconCustom from '@app/ui/atoms/IconCustom'
import NavLink from '@app/ui/atoms/NavLink'

interface Props {
  styles: StylesType
  error: false | string
}

const ERROR_MESSAGE = 'Произошла ошибка, попробуйте еще раз'

const Footer = ({ styles, error }: Props) => {
  const errorMessage = error ? ERROR_MESSAGE : undefined

  return (
    <footer className={styles.article}>
      <ButtonWithTooltip
        error={errorMessage}
        size={ButtonSize.Large}
        type={ButtonType.Submit}
        className={styles.button}
      >
        Продолжить
      </ButtonWithTooltip>
      <div className={styles.footerBack}>
        <IconCustom
          className={styles.iconBack}
          name="24x24_arrow-small_right"
        />
        <NavLink href="/client/new-claim">Вернуться назад</NavLink>
      </div>
    </footer>
  )
}

export default Footer
