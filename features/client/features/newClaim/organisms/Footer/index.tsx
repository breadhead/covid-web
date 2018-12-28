import * as React from 'react'

import {
  ButtonSize,
  ButtonType,
  ButtonWithTooltip,
} from '@app/features/common/form'
import { StylesType } from '@app/lib/config'

interface Props {
  styles: StylesType
  error?: false | string
}

const ERROR_MESSAGE = 'Произошла ошибка, попробуйте позже'

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
    </footer>
  )
}

export default Footer
