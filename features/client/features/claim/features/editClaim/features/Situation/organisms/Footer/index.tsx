import * as React from 'react'

import cx from 'classnames'

import { ButtonSize, ButtonWithTooltip } from '@app/features/common/form'
import { StylesType } from '@app/lib/config'
import IconCustom from '@app/ui/IconCustom'
import { NavLink } from '@front/ui/nav-link'

interface Props {
  styles: StylesType
  error: false | string
  loading?: boolean
  id?: string
  showDraftNotification?: boolean
}

const ERROR_MESSAGE = 'Произошла ошибка, попробуйте еще раз'

const Footer = ({
  styles,
  error,
  loading,
  id,
  showDraftNotification = false,
}: Props) => {
  const errorMessage = error ? ERROR_MESSAGE : undefined

  return (
    <footer className={cx(styles.article, styles.footer)}>
      <ButtonWithTooltip
        error={errorMessage}
        loading={loading}
        size={ButtonSize.ExtraLarge}
        submit
        className={styles.button}
      >
        Продолжить
      </ButtonWithTooltip>
      {showDraftNotification && (
        <div className={styles.draftContainer}>
          <IconCustom
            className={styles.iconSuccess}
            name="24x24_success_green"
          />
          <span className={styles.draftNotification}>
            Ваши данные сохранены в черновике
          </span>
        </div>
      )}
      <div className={styles.footerBack}>
        {!!id && (
          <>
            <IconCustom
              className={styles.iconBack}
              name="24x24_arrow-small_right"
            />
            <NavLink href={`/client/new-claim/${id}`}>Вернуться назад</NavLink>
          </>
        )}
      </div>
    </footer>
  )
}

export default Footer
