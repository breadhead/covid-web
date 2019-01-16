import { setCookie } from '@app/features/login/features/signIn/helpers/setAuthToken'
import { actions as userActions } from '@app/features/login/features/user'
import Router from 'next/router'
import { Dispatch } from 'redux'

export default () => (dispatch: Dispatch<any>) => {
  setCookie('')

  Router.push('/')

  return dispatch(userActions.setToken(''))
}
