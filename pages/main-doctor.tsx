import React from 'react'

import { default as Page } from '@app/features/main/manager'

class Doctor extends React.Component {
  public static isSecure = true

  public render() {
    return <Page />
  }
}

export default Doctor
