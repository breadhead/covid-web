import React from 'react'

import Conditions from '../../atoms/Conditions'
import Title from '../../atoms/Title'
import SendSms from '../../molecules/SendSms'
import SmsCode from '../../molecules/SmsCode'

export interface Props {
  sendSmsCode: (phone: string) => Promise<void>
  validateSmsCode: (code: string) => Promise<void>
  smsSendSuccess: boolean
  validationSuccess: boolean
}

const ModalSmsConfirm = ({ smsSendSuccess, sendSmsCode, validationSuccess, validateSmsCode }: Props) => {
  return (
    <>
      <Title />
      <Conditions />

      <SendSms success={smsSendSuccess} send={sendSmsCode} />
      <SmsCode valid={validationSuccess} validate={validateSmsCode} />
    </>
  )
}

export default ModalSmsConfirm
