import React from 'react'

import Conditions from '../../atoms/Conditions'
import Title from '../../atoms/Title'
import SendSms from '../../molecules/SendSms'
import SmsCode from '../../molecules/SmsCode'

export interface Props {
  sendSmsCode: (phone: string) => Promise<void>
  smsSendSuccess: boolean
}

const ModalSmsConfirm = ({ smsSendSuccess, sendSmsCode }: Props) => {
  return (
    <>
      <Title />
      <Conditions />

      <SendSms success={smsSendSuccess} send={sendSmsCode} />

      <SmsCode />
    </>
  )
}

export default ModalSmsConfirm
