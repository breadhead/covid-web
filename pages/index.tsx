import React from 'react'
import { connect } from 'react-redux'
import { Dispatch, AnyAction } from 'redux'

import { AppContext } from '@app/lib/server-types'
import Examples, { actions } from '@app/features/examples'

interface Props {
  start: () => NodeJS.Timer
}

class Index extends React.Component<Props> {
  private timer?: NodeJS.Timer

  static getInitialProps({ reduxStore, req }: AppContext) {
    const isServer = !!req
    reduxStore.dispatch(actions.serverRenderClock(isServer) as any)

    return {}
  }

  componentDidMount () {
    this.timer = this.props.start()
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

export default connect(
  null,
  (dispatch: Dispatch<AnyAction>) => ({
    start: () => actions.startClock(dispatch) as any
  })
)(Index)
