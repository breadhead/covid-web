import { setCookie } from '@app/features/login/features/signIn/helpers/setAuthToken'
import { actions as tokenActions } from '@app/features/login/features/token'
import Router from 'next/router'
import { Dispatch } from 'redux'

export default () => (dispatch: Dispatch<any>) => {
  setCookie('')

  Router.push('/')

  return dispatch(tokenActions.set(''))
}
