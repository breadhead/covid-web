import * as React from 'react'
import { connect } from 'react-redux'

import getWindowSize, { WindowSize } from './selector'

const withWindowSize = <P extends object>(
  Component: React.ComponentType<P | any & WindowSize>,
) => {
  const mapStateToProps = (state: any) => ({
    windowSize: getWindowSize(state),
  })

  return connect(mapStateToProps)(Component)
}

export default withWindowSize
