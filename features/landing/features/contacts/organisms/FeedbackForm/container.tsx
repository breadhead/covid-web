import * as React from 'react'

import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'

import { sendFeedback } from './actions'

interface Props {
  sendFeedback: (feedbackFields: any) => Promise<any>
}

const Container = (WrappedComponent: React.ComponentType<Props>) => {
  return class extends React.Component {
    public render() {
      return (
        <WrappedComponent onFormSubmit={this.onFormSubmit} {...this.props} />
      )
    }

    public onFormSubmit = (feedbackFields: any) => {
      sendFeedback(feedbackFields)
    }
  }
}

const mapDipatch = (dispatch: Dispatch<AnyAction>) => ({
  sendFeedback: (feedbackFields: any) =>
    dispatch(sendFeedback(feedbackFields) as any),
})

export default compose(
  connect(
    null,
    mapDipatch,
  ),
  Container,
)
