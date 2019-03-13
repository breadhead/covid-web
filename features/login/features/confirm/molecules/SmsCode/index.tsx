import * as React from 'react'

import { Form, Input } from '@app/features/common/form'
import { InputType } from '@app/features/common/form'
import Button, { ButtonType } from '@app/ui/Button'
import Icon, { IconColor, IconType } from '@app/ui/Icon'

import * as styles from './SmsCode.css'

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
          className={styles.inputWrapper}
        />

        <Button type={ButtonType.Submit} className={styles.button}>
          Отправить
        </Button>
      </>
    )}
  </Form>
)

export default SmsCode
