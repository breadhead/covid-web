import { setFormRequestFinished } from '@app/features/landing/features/request/organisms/RequestForm/localStorage'
import { setCookie } from '@app/features/login/features/signIn/helpers/setAuthToken'
import { State } from '@app/lib/store'

import { actions as userActions } from '@app/features/login/features/user'
import Router from 'next/router'
import { Dispatch } from 'redux'
import { getUserEmail } from "../signIn/selectors/getUserEmail"



export default () => (dispatch: Dispatch<any>,
  getState: () => State,

) => {
  setCookie('')

  Router.push('/')

  setFormRequestFinished(false)

  userActions.setEmail()
  console.log(getUserEmail(getState()))

  if ((window as any).Intercom) {
    ; (window as any).Intercom('shutdown')
  }

  return dispatch(userActions.setToken(''))
}
