import { Icon, Modal } from 'antd'
import React, { Component } from 'react'

import { sendSms, verificateSms } from '@app/lib/api/RealApiClient.ts'
import ModalSmsConfirm from './organisms/Modal'

const confirm = Modal.confirm

const Container = (WrappedComponent) => {
  return class extends React.Component {
    public state = {
      isVisible: false,
      isCodeSent: true,
    }

    public showModal = () => {
      this.setState({
        isVisible: true,
      })
    }

    public onFormSubmit = (values) => {
      console.log(values)
      sendSms(values)
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
      return <WrappedComponent
        isVisible={this.state.isVisible}
        isCodeSent={this.state.isCodeSent}
        showModal={this.showModal}
        onFormSubmit={this.onFormSubmit}
        sendSms={this.sendSms}
        validateSmsCode={this.validateSmsCode}
        handleCancel={this.handleCancel}
      />
    }
  }
}

export default Container
