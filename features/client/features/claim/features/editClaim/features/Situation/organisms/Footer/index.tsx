import * as React from 'react'

import cx from 'classnames'

import { ButtonSize, ButtonWithTooltip } from '@app/features/common/form'
import { StylesType } from '@app/lib/config'
import { Icon } from '@front/ui/icon'
import { NavLink } from '@front/ui/nav-link'
import { IconsList } from '@front/ui/sprite'

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
          <Icon className={styles.iconSuccess} name={IconsList.Success} />
          <span className={styles.draftNotification}>
            Ваши данные сохранены в черновике
          </span>
        </div>
      )}
      <div className={styles.footerBack}>
        {!!id && (
          <>
            <Icon className={styles.iconBack} name={IconsList.ArrowRight} />
            <NavLink href={`/client/new-claim/${id}/`}>Вернуться назад</NavLink>
          </>
        )}
      </div>
    </footer>
  )
}

export default Footer
