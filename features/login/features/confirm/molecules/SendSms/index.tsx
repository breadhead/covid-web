import React from 'react'
import { Form as FinalForm } from 'react-final-form'

import { NON_BREAKING_SPACE } from '@app/lib/config'
import { ButtonType } from '@app/ui/atoms/Button'
import Icon, { IconColor, IconType } from '@app/ui/atoms/Icon'
import { InputType } from '@app/ui/atoms/Input'
import Form from '@app/ui/molecules/Form'
import Button from '@app/ui/molecules/FormButton'
import Input from '@app/ui/molecules/FormInput'

import * as styles from './SendSms.css'

interface Props {
  success: boolean
  send: (phone: string) => void
}

const SendSms = ({ success, send }: Props) => (
  <FinalForm
    onSubmit={({ phone }: any) => send(phone)}
    render={(props) => (
      <Form {...props}>
        <Input
          name="phone"
          type={InputType.Number}
          label="Номер вашего телефона"
          defaultValue="+7"
          wrapperClassName={styles.inputWrapper}
          required
        />
        <div className={styles.blockGettingCode}>
          <Button type={ButtonType.Submit}>Получить код</Button>
          {success && (
            <p className={styles.messageCodeSent} hidden={false}>
              <Icon type={IconType.CheckCircle} color={IconColor.Success} />
              {NON_BREAKING_SPACE}Код отправлен
            </p>
          )}
        </div>
      </Form>
    )}
  />
)

export default SendSms
