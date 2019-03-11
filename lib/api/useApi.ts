import { useMemo } from 'react'
import { useMappedState } from 'redux-react-hook'

import { getToken } from '@app/features/login'
import apiFactory from '@app/lib/api/apiFactory'

export const useApi = () => {
  const token = useMappedState(getToken)

  const api = useMemo(() => apiFactory(token), [token])

  return api
}
