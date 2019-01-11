import { isUndefined } from 'lodash'
import * as react from 'react'

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
