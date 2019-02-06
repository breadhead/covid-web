import { validate } from '@breadhead/validate-phone'
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
  smsSendError: false | string
}

interface LocalState {
  validationError?: string
}

class SendSms extends React.Component<Props, LocalState> {
  public state = {
    validationError: undefined,
  } as LocalState

  public render() {
    const { success, smsSendError } = this.props
    const { validationError } = this.state

    return (
      <Form onSubmit={({ phone }: any) => this.onSubmit(phone)}>
        {() => (
          <>
            <Input
              name="phone"
              type={InputType.Number}
              label="Номер вашего телефона"
              defaultValue="+7"
              className={styles.inputWrapper}
              required
              error={validationError || smsSendError}
            />
            <div className={styles.blockGettingCode}>
              <Button className={styles.button} type={ButtonType.Submit}>
                Получить код
              </Button>
              {success && !validationError && (
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
  }

  private onSubmit = (phone: string) => {
    const { send } = this.props

    const realPhone = phone.replace(/^8/, '7')
    const { valid } = validate(realPhone)
    if (!valid) {
      return this.setState({ validationError: 'Ошибка в номере телефона' })
    }

    this.setState({ validationError: undefined })

    return send(phone)
  }
}

export default SendSms
