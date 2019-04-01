import * as React from 'react'

import cx from 'classnames'

import {
  ButtonKind,
  ButtonSize,
  ButtonWithTooltip,
} from '@app/features/common/form'
import withWindowSize, { WindowSize } from '@app/features/common/windowSize'
import { NON_BREAKING_SPACE, StylesType } from '@app/lib/config'
import { IconsList } from '@app/src/ui/sprite'
import { Icon } from '@front/ui/icon'
import { NavLink } from '@front/ui/nav-link'
import { isString } from 'lodash'
import { useButtonText } from './useButtonText'

interface Props {
  styles: StylesType
  error: false | string
  loading?: boolean
  id: string
  windowSize: WindowSize
}

const ERROR_MESSAGE = 'Произошла ошибка'

const Footer = ({ styles, error, loading, id, windowSize }: Props) => {
  const errorMessage = isString(error)
    ? error
    : !!error
    ? ERROR_MESSAGE
    : undefined

  const {
    submitButtonText,
    laterButtonText,
    onLaterButtonClick,
  } = useButtonText(windowSize.width)

  return (
    <footer className={cx(styles.article, styles.footer)}>
      <p className={cx(styles.secondaryText, styles.questionsFooterText)}>
        После отправки ваша заявка будет передана на{NON_BREAKING_SPACE}
        консультацию. Вы не{NON_BREAKING_SPACE}сможете её{NON_BREAKING_SPACE}
        отредактировать, но{NON_BREAKING_SPACE}сможете добавить любую информацию
        или файлы в{NON_BREAKING_SPACE}чат с{NON_BREAKING_SPACE}экспертом.
      </p>
      <ButtonWithTooltip
        error={errorMessage}
        loading={loading}
        size={ButtonSize.ExtraLarge}
        submit
        className={styles.button}
      >
        {submitButtonText}
      </ButtonWithTooltip>
      <ButtonWithTooltip
        kind={ButtonKind.Secondary}
        error={errorMessage}
        loading={loading}
        size={ButtonSize.ExtraLarge}
        className={styles.laterButton}
        onClick={onLaterButtonClick}
      >
        {laterButtonText}
      </ButtonWithTooltip>
      <div className={styles.footerBack}>
        <Icon className={styles.iconBack} name={IconsList.ArrowRight} />
        <NavLink href={`/client/claim/${id}/situation`}>
          Вернуться назад
        </NavLink>
      </div>
    </footer>
  )
}

export default withWindowSize(Footer as any) as any
