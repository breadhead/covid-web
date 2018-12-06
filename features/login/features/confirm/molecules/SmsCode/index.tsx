import React from 'react'

import Icon, { IconColor, IconType } from '@app/ui/atoms/Icon'
import Input, { InputType } from '@app/ui/atoms/Input'

const SmsCode = () => (
  <Input
    name="sms code"
    type={InputType.Number}
    label="Код из СМС"
    addonAfter={<Icon type={IconType.CheckCircle} color={IconColor.Success} />}
    maxLength={4}
    required
  />
)

export default SmsCode
