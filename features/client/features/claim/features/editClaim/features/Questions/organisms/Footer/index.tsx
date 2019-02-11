import * as React from 'react'

import cx from 'classnames'

import {
  ButtonSize,
  ButtonType,
  ButtonWithTooltip,
} from '@app/features/common/form'
import { StylesType } from '@app/lib/config'
import IconCustom from '@app/ui/atoms/IconCustom'
import NavLink from '@app/ui/atoms/NavLink'
import { isString } from 'lodash'

interface Props {
  styles: StylesType
  error: false | string
  loading?: boolean
  id: string
}

const ERROR_MESSAGE = 'Произошла ошибка'

const Footer = ({ styles, error, loading, id }: Props) => {
  const errorMessage = isString(error)
    ? error
    : !!error
    ? ERROR_MESSAGE
    : undefined

  return (
    <footer className={cx(styles.article, styles.footer)}>
      <ButtonWithTooltip
        error={errorMessage}
        loading={loading}
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
        <NavLink href={`/client/claim/${id}/situation`}>
          Вернуться назад
        </NavLink>
      </div>
    </footer>
  )
}

export default Footer
