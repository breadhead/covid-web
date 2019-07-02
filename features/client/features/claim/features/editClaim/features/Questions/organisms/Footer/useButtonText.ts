import routes from '@app/routes'
import { useCallback, useEffect, useState } from 'react'
import { getButtonText } from './getButtonText'

const { Router } = routes

export const useButtonText = (width: number) => {
  const [submitButtonText, setSubmitButtonText] = useState(
    getButtonText(width).submit,
  )
  const [laterButtonText, setLaterButtonText] = useState(
    getButtonText(width).later,
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
