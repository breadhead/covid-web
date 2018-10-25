import React from 'react'

import LandingPage from '@app/features/landing'
import { AppContext } from '@app/lib/server-types'

class Index extends React.Component {

  public static getInitialProps(context: AppContext) {
    console.log(context.req.cookies)

    return {
      c: context.req.cookies,
    }
  }

  public componentDidMount() {
    console.log(this.props)

  }

  public render() {
    return (
      <LandingPage />
    )
  }
}

export default Index
