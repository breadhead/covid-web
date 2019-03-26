import routes from '@app/routes'
import { useCallback, useEffect, useState } from 'react'
import { defaultButtonText, getButtonText } from './getButtonText'

const Router = routes.Router

export const useButtonText = (width: number) => {
  const [submitButtonText, setSubmitButtonText] = useState(
    defaultButtonText.submit,
  )
  const [laterButtonText, setLaterButtonText] = useState(
    defaultButtonText.later,
  )

  useEffect(
    () => {
      const text = getButtonText(width)
      setSubmitButtonText(text.submit)
      setLaterButtonText(text.later)
    },
    [width],
  )

  const onLaterButtonClick = useCallback(
    () => Router.pushRoute('/client/claims'),
    [],
  )

  return {
    submitButtonText,
    laterButtonText,
    onLaterButtonClick,
  }
}
