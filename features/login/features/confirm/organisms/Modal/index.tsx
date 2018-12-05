import { Form, Icon } from 'antd'
import React from 'react'
import { Form as FinalForm } from 'react-final-form'

import Button from '@app/ui/molecules/Button'
import Input from '@app/ui/molecules/Input'
import * as styles from './Modal.css'

const IconMessageCodeSentStyles = {
  fontSize: '18px',
  color: 'var(--color-success)',
}

const ModalSmsConfirm = () => {
  return (
    <React.Fragment>
      <h2 className={styles.title}>СМС-код</h2>
      <p className={styles.description}>
        Пожалуйста, введите ваш номер мобильного телефона, и мы вышлем на него СМС
          с кодом для подтверждения согласия с{' '}
        <a href="/conditions">
          условиями обработки личных данных
          </a>
      </p>
      <FinalForm
        render={(props) => (
          <Form onSubmit={props.handleSubmit}>
            <Input
              name="number"
              type="tel"
              label="Номер вашего телефона"
              // TODO: fix default value attribute when the input component will be replaced for new one
              defaultValue="+7"
              required
            />
            <div className={styles.blockGettingCode}>
              <Button htmlType="submit">Получить код</Button>
              <p className={styles.messageCodeSent} hidden={false}>
                <Icon type="check-circle" style={IconMessageCodeSentStyles} />
                &nbsp;
                Код отправлен
              </p>
            </div>
          </Form>
        )}
      />
      <Input
        name="sms code"
        type="number"
        label="Код из СМС"
        addonAfter={
          <Icon type="check" style={IconMessageCodeSentStyles} />
        }
        maxLength="6"
        required
      />
    </React.Fragment>
  )
}

export default ModalSmsConfirm
