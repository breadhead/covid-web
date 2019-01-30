import React from 'react'

import { Form, Input } from '@app/features/common/form'
import { InputType } from '@app/features/common/form'
import Icon, { IconColor, IconType } from '@app/ui/atoms/Icon'

interface Props {
  valid: boolean
  validate: (code: string) => void
  codeValidationError: false | string
}

const SmsCode = ({ valid, validate, codeValidationError }: Props) => (
  <Form onSubmit={({ code }: any) => validate(code)}>
    {() => (
      <>
        <Input
          name="code"
          type={InputType.Number}
          label="Код из СМС"
          error={codeValidationError}
          addonAfter={
            valid && (
              <Icon type={IconType.CheckCircle} color={IconColor.Success} />
            )
          }
          maxLength={4}
          required
        />
      </>
    )}
  </Form>
)

export default SmsCode
