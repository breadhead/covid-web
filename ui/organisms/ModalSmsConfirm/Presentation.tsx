import { Form, Icon, Modal } from 'antd'
import React, { Component } from 'react'

import Button from '@app/ui/molecules/Button'
import Input from '@app/ui/molecules/Input'
import * as styles from './Styles.css'

const confirm = Modal.confirm

const IconMessageCodeSentStyles = {
  fontSize: '18px',
  color: 'var(--color-success)',
}

const ModalSmsConfirm = ({
  isVisible,
  isCodeSent,
  showModal,
  handleSubmit,
  sendSms,
  validateSmsCode,
  handleCancel,
}) => {
  return (
    <React.Fragment>
      <Button type="button" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        visible={isVisible}
        onCancel={handleCancel}
        bodyStyle={{padding: '40px'}}
        footer={null}
        width={400}
        closable
      >
        <h2 className={styles.title}>СМС-код</h2>
        <p className={styles.description}>
          Пожалуйста, введите ваш номер мобильного телефона, и мы вышлем на него СМС
          с кодом для подтверждения согласия с{' '}
          <a href="/conditions">
            условиями обработки личных данных
          </a>
        </p>
        <Form onSubmit={handleSubmit}>
          <Input
            name="telephone"
            type="tel"
            label="Номер вашего телефона"
            // TODO: fix default value attribute when the input component will be replaced for new one
            defaultValue="+7"
            required
          />
          <div className={styles.blockGettingCode}>
            <Button htmlType="submit">Получить код</Button>
            <p className={styles.messageCodeSent} hidden={!isCodeSent}>
              <Icon type="check-circle" style={IconMessageCodeSentStyles} />
              &nbsp;
              Код отправлен
            </p>
          </div>
        </Form>
        <Input
          name="sms code"
          type="number"
          label="Код из СМС"
          onChange={validateSmsCode}
          addonAfter={
            <Icon type="check" style={IconMessageCodeSentStyles}/>
          }
          maxLength="6"
          required
        />
      </Modal>
    </React.Fragment>
  )
}

export default ModalSmsConfirm
