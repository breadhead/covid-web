import bugsnagClient from '@app/pages/bugsnag'
import React from 'react'

import NotFound from '@app/features/main/notFound'

interface Props {
  statusCode: number
}

export default class Error extends React.Component<Props> {
  public static getInitialProps({ res, err }: any) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null

    if (err) {
      bugsnagClient.notify(err)
    }

    return { statusCode }
  }

  public render() {
    if (this.props.statusCode === 404) {
      return <NotFound />
    }
  }
}
