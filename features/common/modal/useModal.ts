import { useCallback } from 'react'
import { useDispatch } from 'redux-react-hook'

import { actions } from './reducer'

export const useModal = () => {
  const dispatch = useDispatch()

  const open = useCallback((key: string) => dispatch(actions.open(key)), [])

  const close = useCallback(() => dispatch(actions.close()), [])

  return {
    open,
    close,
  }
}
