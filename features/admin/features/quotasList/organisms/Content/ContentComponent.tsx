import React from 'react'
import { isUndefined } from 'lodash'

// TODO: fix types
const ContentComponent = ({ PassedValue, Component, ...rest }: any) => {
  if (isUndefined(PassedValue)) {
    return <Component {...rest} />
  }

  if (PassedValue === false) {
    return null
  }
  const PassedComponent = PassedValue.component
  return <PassedComponent {...rest} {...PassedValue.props} />
}

export default ContentComponent
