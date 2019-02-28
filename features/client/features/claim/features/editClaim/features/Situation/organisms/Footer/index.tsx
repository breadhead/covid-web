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

interface Props {
  styles: StylesType
  error: false | string
  loading?: boolean
  id: string
  showDraftNotification?: boolean
}

const ERROR_MESSAGE = 'Произошла ошибка, попробуйте еще раз'

const Footer = ({
  styles,
  error,
  loading,
  id,
  showDraftNotification,
}: Props) => {
  const errorMessage = error ? ERROR_MESSAGE : undefined

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
      {showDraftNotification && (
        <div className={styles.draftNotification}>
          Ваши данные сохранены в черновике
        </div>
      )}
      <div className={styles.footerBack}>
        <IconCustom
          className={styles.iconBack}
          name="24x24_arrow-small_right"
        />
        <NavLink href={`/client/new-claim/${id}`}>Вернуться назад</NavLink>
      </div>
    </footer>
  )
}

export default Footer
