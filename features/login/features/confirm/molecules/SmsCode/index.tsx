import React from 'react'

import { Form, Input } from '@app/features/common/form'
import Icon, { IconColor, IconType } from '@app/ui/atoms/Icon'
import { InputType } from '@app/ui/atoms/Input'

interface Props {
  valid: boolean
  validate: (code: string) => void
}

const SmsCode = ({ valid, validate }: Props) => (
  <Form onSubmit={({ code }: any) => validate(code)}>
    <Input
      name="code"
      type={InputType.Number}
      label="Код из СМС"
      addonAfter={
        valid && <Icon type={IconType.CheckCircle} color={IconColor.Success} />
      }
      maxLength={4}
      required
    />
  </Form>
)

export default SmsCode
