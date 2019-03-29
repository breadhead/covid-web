import * as React from 'react'

import { Form, Input } from '@app/features/common/form'
import { InputType } from '@app/features/common/form'
import { Button } from '@front/ui/button'
import { Icon } from '@front/ui/icon'

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
          addonAfter={valid && <Icon className={styles.icon} name="success" />}
          maxLength={4}
          required
          className={styles.inputWrapper}
        />

        <Button submit className={styles.button}>
          Отправить
        </Button>
      </>
    )}
  </Form>
)

export default SmsCode
