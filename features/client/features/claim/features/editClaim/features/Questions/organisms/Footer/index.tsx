import * as React from 'react'
import { useCallback, useEffect, useState } from 'react'

import cx from 'classnames'

import {
  ButtonKind,
  ButtonSize,
  ButtonWithTooltip,
} from '@app/features/common/form'
import withWindowSize, { WindowSize } from '@app/features/common/windowSize'
import { NON_BREAKING_SPACE, StylesType } from '@app/lib/config'
import routes from '@app/routes'
import IconCustom from '@app/ui/IconCustom'
import NavLink from '@app/ui/NavLink'
import { isString } from 'lodash'
import { defaultButtonText, getButtonText } from './config'

const Router = routes.Router

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

  const [submitButtonText, setSubmitButtonText] = useState(
    defaultButtonText.submit,
  )
  const [laterButtonText, setLaterButtonText] = useState(
    defaultButtonText.later,
  )

  useEffect(
    () => {
      const text = getButtonText(windowSize.width)
      setSubmitButtonText(text.submit)
      setLaterButtonText(text.later)
    },
    [windowSize.width],
  )

  const onLaterButtonClick = useCallback(
    () => Router.pushRoute('/client/claims'),
    [],
  )

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

export default withWindowSize(Footer as any) as any
