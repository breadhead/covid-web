import React, { ComponentType } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { AnyAction, Dispatch } from 'redux'

import { isModal, withModal, WithModalProps } from '@app/features/common/modal'
import { State } from '@app/lib/store'

import { sendSms, validateCode } from './actions'
import { Props as WrappedProps } from './organisms/Modal'
import {
  getCodeValid,
  getCodeValidationError,
  getSendError,
  getSendSuccess,
} from './selectors'

export const MODAL_KEY = 'sms-confirm'

interface Props {
  sendSmsCode: (phone: string) => Promise<void>
  validateSmsCode: (code: string) => Promise<void>
  smsSendSuccess: boolean
  codeValidationError: false | string
  smsSendError: false | string
  codeValid: boolean
}

const Container = (WrappedComponent: ComponentType<WrappedProps>) =>
  class ContaineredComponent extends React.Component<Props & WithModalProps> {
    public render() {
      const {
        sendSmsCode,
        smsSendSuccess,
        codeValid,
        validateSmsCode,
        codeValidationError,
        smsSendError,
        modal: { close },
      } = this.props

      const childProps: WrappedProps = {
        sendSmsCode,
        smsSendSuccess,
        validateSmsCode,
        codeValidationError,
        smsSendError,
        validationSuccess: smsSendSuccess && codeValid,
        close,
      }

      return <WrappedComponent {...childProps} />
    }
  }

const mapState = (state: State) => ({
  smsSendSuccess: getSendSuccess(state),
  smsSendError: getSendError(state),
  codeValid: getCodeValid(state),
  codeValidationError: getCodeValidationError(state),
})

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  sendSmsCode: (phone: string) => dispatch(sendSms(phone) as any),
  validateSmsCode: (code: string) => dispatch(validateCode(code) as any),
})

export default compose<WrappedProps, {}>(
  isModal(MODAL_KEY),
  withModal,
  connect(
    mapState,
    mapDispatch,
  ),
  Container,
)
