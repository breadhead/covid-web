import React from 'react'

import LoginPage from '@app/features/login'
import { AppContext } from '@app/lib/server-types'

class Index extends React.Component {

  public static getInitialProps(context: AppContext) {
    // prepare data for landing

    return {}
  }

  public render() {
    return (
      <LoginPage />
    )
  }
}

export default Index
