import { ExtraArgs, State } from '@app/lib/store'
import { Dispatch } from 'redux'

import { GENERIC_CLAIM_ERROR } from '@app/features/client/values'
import { actions } from './reducer'

const CODE_VALIDATION_ERROR = 'Проверьте правильность введённого кода'

export const sendSms = (phone: string) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  dispatch(actions.sendSms.request())

  try {
    await api.sendSms(phone)
    dispatch(actions.sendSms.success())
  } catch (error) {
    dispatch(actions.sendSms.error(GENERIC_CLAIM_ERROR))
    throw error
  }
}

export const validateCode = (code: string) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  dispatch(actions.validateCode.request())

  try {
    const valid = await api.verificateSms(code)

    if (!valid) {
      throw new Error(CODE_VALIDATION_ERROR)
    }
    dispatch(actions.validateCode.success(valid))
  } catch (error) {
    const errorMessage = // TODO: add error message types
      error.message === CODE_VALIDATION_ERROR
        ? CODE_VALIDATION_ERROR
        : GENERIC_CLAIM_ERROR

    dispatch(actions.validateCode.success(false))
    dispatch(actions.validateCode.error(errorMessage))
    throw error
  }
}
