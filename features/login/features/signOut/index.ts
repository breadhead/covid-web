import { setCookie } from '@app/features/login/features/signIn/helpers/setAuthToken'
import { actions as userActions } from '@app/features/login/features/user'
import Router from 'next/router'
import { Dispatch } from 'redux'
import { setFormRequestFinished } from '@app/features/landing/features/request/organisms/RequestForm/localStorage'

export default () => (dispatch: Dispatch<any>) => {
  setCookie('')

  Router.push('/')

  setFormRequestFinished(false)

  return dispatch(userActions.setToken(''))
}
