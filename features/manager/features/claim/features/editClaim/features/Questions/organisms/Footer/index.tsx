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
import styles from './Footer.css'

interface Props {
  styles: StylesType
  error: false | string
  loading: boolean
  id?: string
}

const ERROR_MESSAGE = 'Произошла ошибка, попробуйте еще раз'

const Footer = ({ styles: parentStyles, error, loading, id }: Props) => {
  const errorMessage = isString(error)
    ? error
    : !!error
    ? ERROR_MESSAGE
    : undefined
  return (
    <footer
      className={cx(parentStyles.article, parentStyles.footer, styles.footer)}
    >
      <div className={styles.links}>
        <div className={cx(parentStyles.footerBack, styles.footerBack)}>
          <IconCustom
            className={parentStyles.iconBack}
            name="24x24_arrow-small_right"
          />
          <NavLink href={`/manager/claim/${id}/situation`}>
            Медицинские данные
          </NavLink>
        </div>
      </div>
      <ButtonWithTooltip
        error={errorMessage}
        size={ButtonSize.Large}
        type={ButtonType.Submit}
        className={parentStyles.button}
        loading={loading}
      >
        Сохранить изменения и вернуться
      </ButtonWithTooltip>
    </footer>
  )
}

export default Footer
