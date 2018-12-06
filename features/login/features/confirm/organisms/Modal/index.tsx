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
}

const ModalSmsConfirm = ({ smsSendSuccess, sendSmsCode, validationSuccess, validateSmsCode }: Props) => {
  return (
    <div className={styles.modal}>
      <Title />
      <Conditions />

      <SendSms success={smsSendSuccess} send={sendSmsCode} />
      <SmsCode valid={validationSuccess} validate={validateSmsCode} />
    </div>
  )
}

export default ModalSmsConfirm
