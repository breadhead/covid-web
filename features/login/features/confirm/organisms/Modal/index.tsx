import React from 'react'

import Conditions from '../../atoms/Conditions'
import Title from '../../atoms/Title'
import SendSms from '../../molecules/SendSms'
import SmsCode from '../../molecules/SmsCode'

const ModalSmsConfirm = () => {
  return (
    <>
      <Title />
      <Conditions />

      <SendSms />

      <SmsCode />
    </>
  )
}

export default ModalSmsConfirm
