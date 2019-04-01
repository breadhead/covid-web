import { validate } from '@breadhead/validate-phone'
import React from 'react'

import { Form, Input } from '@app/features/common/form'
import { NON_BREAKING_SPACE } from '@app/lib/config'
import { Button } from '@front/ui/button'

import { IconsList } from '@app/src/ui/sprite'
import { Icon } from '@front/ui/icon'
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
            <label htmlFor="phone">
              Номер вашего телефона.
              <p className={styles.secondaryText}>
                Например, +7{NON_BREAKING_SPACE}(000){NON_BREAKING_SPACE}
                000-00-00, если вы{NON_BREAKING_SPACE}живёте в
                {NON_BREAKING_SPACE}России.
              </p>
            </label>
            <Input
              name="phone"
              defaultValue="+7"
              className={styles.inputWrapper}
              required
              error={validationError || smsSendError}
            />
            <div className={styles.blockGettingCode}>
              <Button className={styles.button} submit>
                Получить код
              </Button>
              {success && !validationError && (
                <p className={styles.messageCodeSent} hidden={false}>
                  <Icon className={styles.icon} name={IconsList.Success} />
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
    const realPhone = phone.replace(/[^0-9]/g, '').replace(/^8/, '7')

    const { valid } = validate(realPhone)
    if (!valid) {
      if (realPhone.length < 11) {
        return this.setState({ validationError: 'Недостаточно символов' })
      }
      if (realPhone.length > 11) {
        return this.setState({ validationError: 'Слишком длинный номер' })
      }
      return this.setState({ validationError: 'Ошибка в номере телефона' })
    }

    this.setState({ validationError: undefined })
    return send(realPhone)
  }
}

export default SendSms
