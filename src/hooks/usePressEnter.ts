import { KeyboardEvent, RefObject, useCallback, useEffect } from 'react'

export const usePressEnter = (
  ref: RefObject<HTMLElement>,
  onPress: () => void,
) => {
  // "any" because addEventListener deny KeyboardEvent listener
  const handleEnter: any = useCallback(
    ({ keyCode }: KeyboardEvent<HTMLElement>) => {
      if (keyCode === 13) {
        onPress()
      }
    },
    [onPress],
  )

  useEffect(
    () => {
      const { current } = ref
      if (current) {
        current.addEventListener('keyup', handleEnter)

        return () => current.removeEventListener('keyup', handleEnter)
      }
    },
    [ref, handleEnter],
  )
}
