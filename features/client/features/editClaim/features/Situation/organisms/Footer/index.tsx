import * as React from 'react'

import cx from 'classnames'

import {
  ButtonSize,
  ButtonType,
  ButtonWithTooltip,
} from '@app/features/common/form'
import { StylesType } from '@app/lib/config'

interface Props {
  styles: StylesType
  error: false | string
  loading: boolean
}

const ERROR_MESSAGE = 'Произошла ошибка, попробуйте еще раз'

const Footer = ({ styles, error, loading }: Props) => {
  const errorMessage = error ? ERROR_MESSAGE : undefined
  return (
    <footer className={cx(styles.article, styles.footer)}>
      <ButtonWithTooltip
        error={errorMessage}
        size={ButtonSize.Large}
        type={ButtonType.Submit}
        className={styles.button}
        loading={loading}
      >
        Продолжить
      </ButtonWithTooltip>
    </footer>
  )
}

export default Footer
