import { useCallback } from 'react'

export const useHandleChange = (
  internalValue: boolean,
  setInternalValue: (v: boolean) => void,
  externalValue?: boolean,
  setExternalValue?: (v: boolean) => void,
) => {
  return useCallback(
    () => {
      const newValue = !internalValue

      if (setExternalValue) {
        setExternalValue(newValue)
      }

      if (externalValue !== undefined) {
        setInternalValue(externalValue)
      } else {
        setInternalValue(newValue)
      }
    },
    [internalValue, setInternalValue, externalValue, setExternalValue],
  )
}
