import React from 'react'
import { connect } from 'react-redux'

import { startClock, serverRenderClock } from '@app/lib/store'
import { AppContext } from '@app/lib/server-types'
import Examples from '@app/features/examples'

interface Props {
  dispatch: any // TODO: fix it
}

class Index extends React.Component<Props> {
  private timer?: NodeJS.Timer

  static getInitialProps({ reduxStore, req }: AppContext) {
    const isServer = !!req
    reduxStore.dispatch(serverRenderClock(isServer) as any)

    return {}
  }

  componentDidMount () {
    const { dispatch } = this.props
    this.timer = startClock(dispatch)
  }

  componentWillUnmount () {
    clearInterval(this.timer!)
  }

  render () {
    return (
      <Examples />
    )
  }
}

export default connect()(Index)
