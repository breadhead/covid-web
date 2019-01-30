import Router from 'next/router'
import React from 'react'

import Conditions from '../../atoms/Conditions'
import Title from '../../atoms/Title'
import SendSms from '../../molecules/SendSms'
import SmsCode from '../../molecules/SmsCode'

import * as styles from './Modal.css'

export interface Props {
  sendSmsCode: (phone: string) => Promise<void>
  validateSmsCode: (code: string) => Promise<void>
  smsSendSuccess: boolean
  validationSuccess: boolean
  codeValidationError: false | string
  smsSendError: false | string
  close: () => void
}

class ModalSmsConfirm extends React.Component<Props> {
  public componentDidUpdate() {
    const { validationSuccess } = this.props

    if (validationSuccess) {
      return Router.push('/client/new-claim').then(() => this.props.close())
    }
  }

  public render() {
    const {
      smsSendSuccess,
      sendSmsCode,
      validationSuccess,
      validateSmsCode,
      codeValidationError,
      smsSendError,
    } = this.props

    return (
      <div className={styles.modal}>
        <Title />
        <Conditions />

        <SendSms
          smsSendError={smsSendError}
          success={smsSendSuccess}
          send={sendSmsCode}
        />
        <SmsCode
          codeValidationError={codeValidationError}
          valid={validationSuccess}
          validate={validateSmsCode}
        />
      </div>
    )
  }
}

export default ModalSmsConfirm
