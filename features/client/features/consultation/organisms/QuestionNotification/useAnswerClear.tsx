import { useEffect } from 'react'

export const useAnswerClear = (
  setAnswerClear: (value: boolean) => void,
  value: boolean,
) => {
  useEffect(() => {
    if (window.location.href.includes('openMessage')) {
      setAnswerClear(value)
    }
  }, [])
}
