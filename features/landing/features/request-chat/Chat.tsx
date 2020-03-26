import * as React from 'react'
import { APP_ID } from '@app/features/common/intercom/config'
import { useMappedState } from 'redux-react-hook'
import { getUserEmail } from '@app/features/login/features/confirm/reducer/selectors'
import {
  getRequestFormDraft,
  getFormattedForm,
} from '../request/organisms/RequestForm/localStorage'
import { getCovidSymptoms } from './getConclutionText'

function getCovid() {
  try {
    const result = getCovidSymptoms(getFormattedForm())
    return result
  } catch (error) {
    return false
  }
}

export const Chat = () => {
  const email = useMappedState(getUserEmail)

  React.useEffect(() => {
    if (!!email) {
      ;(window as any).Intercom('boot', {
        app_id: APP_ID,
        email: email,
        created_at: 1234567890,
        name: `${getCovid() ? '[!]' : ''}${email}`,
        user_id: email,
        ...getFormattedForm(),
      })
    }
  }, [])

  return <></>
}
