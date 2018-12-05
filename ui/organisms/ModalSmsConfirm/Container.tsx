import { Icon, Modal } from 'antd'
import React, { Component } from 'react'

import { sendSms, verificateSms } from '@app/lib/api/RealApiClient.ts'
import ModalSmsConfirm from './Presentation'

const confirm = Modal.confirm

export class ModalSmsConfirmContainer extends Component {
  public state = {
    isVisible: false,
    isCodeSent: true,
  }

  public showModal = () => {
    this.setState({
      isVisible: true,
    })
  }

  public handleSubmit = (e) => {
    e.preventDefault()

    this.props.form.validateFields((err, value) => {
      if (err) {
        console.log('Received values of form: ', value)
        return
      }

      console.log('Received values of form: ', value)
    })
  }

  public sendSms = (e) => {
    {/* TODO: add sms sending funcional*/ }
    console.log(e)
    sendSms()
  }

  public validateSmsCode = (e) => {
    {/* TODO: add sms validation functional*/ }
    console.log(e)
    verificateSms()
  }

  public handleCancel = (e) => {
    this.setState({
      isVisible: false,
    })
  }

  public render() {
    return (
      <ModalSmsConfirm
        isVisible={this.state.isVisible}
        isCodeSent={this.state.isCodeSent}
        showModal={this.showModal}
        handleSubmit={this.handleSubmit}
        sendSms={this.sendSms}
        validateSmsCode={this.validateSmsCode}
        handleCancel={this.handleCancel}
      />
    )
  }
}

export default ModalSmsConfirmContainer
