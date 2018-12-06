import React, { ComponentType } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { AnyAction, Dispatch } from 'redux'

import { isModal } from '@app/features/common/modal'
import { State } from '@app/lib/store'

import { sendSms } from './actions'
import { Props as WrappedProps } from './organisms/Modal'
import { getSendSuccess } from './selectors'

export const MODAL_KEY = 'sms-confirm'

interface Props {
  sendSmsCode: (phone: string) => Promise<void>
  smsSendSuccess: boolean
}

const Container = (WrappedComponent: ComponentType<WrappedProps>) =>
  class extends React.Component<Props> {
    public render() {
      const { sendSmsCode, smsSendSuccess } = this.props

      const childProps: WrappedProps = {
        sendSmsCode,
        smsSendSuccess,
      }

      return (
        <WrappedComponent {...childProps} />
      )
    }
  }

const mapState = (state: State) => ({
  smsSendSuccess: getSendSuccess(state),
})

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  sendSmsCode: (phone: string) => dispatch(sendSms(phone) as any),
})

export default compose<WrappedProps, {}>(
  isModal(MODAL_KEY),
  connect(mapState, mapDispatch),
  Container,
)
