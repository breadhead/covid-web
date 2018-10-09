import React from 'react'
import { connect } from 'react-redux'

import { startClock, serverRenderClock } from '../store'
import Examples from '../components/examples'

import { AppContext } from '../lib/server-types'

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
