import * as React from 'react'

import cx from 'classnames'

import { ButtonSize, ButtonWithTooltip } from '@app/features/common/form'
import { StylesType } from '@app/lib/config'
import { IconsList } from '@app/src/ui/sprite/IconsList'
import { Icon } from '@front/ui/icon'
import { NavLink } from '@front/ui/nav-link'
import styles from './Footer.css'

interface Props {
  styles: StylesType
  error: false | string
  loading: boolean
  id?: string
}

const ERROR_MESSAGE = 'Произошла ошибка, попробуйте еще раз'

const Footer = ({ styles: parentStyles, error, loading, id }: Props) => {
  const errorMessage = error ? ERROR_MESSAGE : undefined
  return (
    <footer
      className={cx(parentStyles.article, parentStyles.footer, styles.footer)}
    >
      <div className={styles.links}>
        <div className={cx(parentStyles.footerBack, styles.footerBack)}>
          <Icon className={parentStyles.iconBack} name={IconsList.ArrowRight} />
          <NavLink href={`/manager/new-claim/${id}`}>Короткая заявка</NavLink>
        </div>
        <div className={cx(parentStyles.footerForward, styles.footerForward)}>
          <NavLink href={`/manager/claim/${id}/questions`}>
            Вопросы к эксперту
          </NavLink>
          <Icon
            className={parentStyles.iconForward}
            name={IconsList.ArrowRight}
          />
        </div>
      </div>
      <ButtonWithTooltip
        error={errorMessage}
        size={ButtonSize.Large}
        submit
        className={parentStyles.button}
        loading={loading}
      >
        Сохранить изменения и вернуться
      </ButtonWithTooltip>
    </footer>
  )
}

export default Footer
