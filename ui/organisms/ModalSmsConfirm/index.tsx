import { Icon, Modal } from 'antd'
import React, { Component } from 'react'

import Button from '@app/ui/molecules/Button'
import Input from '@app/ui/molecules/Input'
import * as styles from './PopupSmsConfirm.css'

const confirm = Modal.confirm

const IconMessageCodeSentStyles = {
  fontSize: '18px',
  color: 'var(--color-success)',
}

export class PopupSmsConfirm extends Component {
  public state = {
    visible: false,
    isCodeSent: true,
  }

  public showModal = () => {
    this.setState({
      visible: true,
    })
  }

  public sendSms = () => null

  public validateSmsCode = () => null

  public handleOk = (e) => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }

  public handleCancel = (e) => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }

  public render() {
    return (
      <div>
        <Button type="button" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          visible={this.state.visible}
          // onOk={this.handleOk}
          // onCancel={this.handleCancel}
          closable
          footer={null}
          bodyStyle={{padding: '40px'}}
          width={400}
        >
          <h2 className={styles.title}>СМС-код</h2>
          <p className={styles.description}>
            Пожалуйста, введите ваш номер мобильного телефона, и мы вышлем на него СМС
            с кодом для подтверждения согласия с{' '}
            <a href="/conditions">
              условиями обработки личных данных
            </a>
          </p>
          <Input name="telephone" type="tel" label="Номер вашего телефона" required/>
          <div className={styles.blockGettingCode}>
            <Button onClick={this.sendSms}>Получить код</Button>
            <p className={styles.messageCodeSent} hidden={!this.state.isCodeSent}>
              <Icon type="check-circle" style={IconMessageCodeSentStyles} />
              &nbsp;
              Код отправлен
            </p>
          </div>
          <Input
            type="number"
            label="Код из СМС"
            onChange={this.validateSmsCode}
            // TODO: define code max length
            maxLength="4"
            required
          />
        </Modal>
      </div >
    )
  }
}

export default PopupSmsConfirm
