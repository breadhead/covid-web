import React from 'react'
import { Form as FinalForm } from 'react-final-form'

import Input from '@app/features/common/form/Input'
import Icon, { IconColor, IconType } from '@app/ui/atoms/Icon'
import { InputType } from '@app/ui/atoms/Input'
import Form from '@app/ui/molecules/Form'

interface Props {
  valid: boolean
  validate: (code: string) => void
}

const SmsCode = ({ valid, validate }: Props) => (
  <FinalForm
    onSubmit={({ code }: any) => validate(code)}
    render={props => (
      <Form {...props}>
        <Input
          name="code"
          type={InputType.Number}
          label="Код из СМС"
          addonAfter={
            valid && (
              <Icon type={IconType.CheckCircle} color={IconColor.Success} />
            )
          }
          maxLength={4}
          required
        />
      </Form>
    )}
  />
)

export default SmsCode
