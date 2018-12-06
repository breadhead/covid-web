import React from 'react'

import Conditions from '../../atoms/Conditions'
import Title from '../../atoms/Title'

import SendSms from '../../molecules/SendSms'

const ModalSmsConfirm = () => {
  return (
    <React.Fragment>
      <Title />
      <Conditions />

      <SendSms />

      {/* <Input
        name="sms code"
        type="number"
        label="Код из СМС"
        addonAfter={<Icon type="check" style={IconMessageCodeSentStyles} />}
        maxLength={6}
        required
      /> */}
    </React.Fragment>
  )
}

export default ModalSmsConfirm
