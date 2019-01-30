import React from 'react'

import { Form, Input } from '@app/features/common/form'
import { InputType } from '@app/features/common/form'
import { NON_BREAKING_SPACE } from '@app/lib/config'
import Button, { ButtonType } from '@app/ui/atoms/Button'
import Icon, { IconColor, IconType } from '@app/ui/atoms/Icon'

import * as styles from './SendSms.css'

interface Props {
  success: boolean
  send: (phone: string) => void
}

const SendSms = ({ success, send }: Props) => (
  <Form onSubmit={({ phone }: any) => send(phone)}>
    {() => (
      <>
        <Input
          name="phone"
          type={InputType.Number}
          label="Номер вашего телефона"
          defaultValue="+7"
          className={styles.inputWrapper}
          required
        />
        <div className={styles.blockGettingCode}>
          <Button className={styles.button} type={ButtonType.Submit}>
            Получить код
          </Button>
          {success && (
            <p className={styles.messageCodeSent} hidden={false}>
              <Icon type={IconType.CheckCircle} color={IconColor.Success} />
              {NON_BREAKING_SPACE}Код отправлен
            </p>
          )}
        </div>
      </>
    )}
  </Form>
)

export default SendSms
