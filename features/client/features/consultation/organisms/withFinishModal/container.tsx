import * as React from 'react'
import { compose } from 'redux'

import { isModal, withModal } from '@app/features/common/modal'

export const MODAL_KEY = 'finish-modal'

const Container = (WrappedComponent: any) => {
  return class extends React.Component<any> {
    public render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

export default compose(
  isModal(MODAL_KEY),
  withModal,
  Container,
)
