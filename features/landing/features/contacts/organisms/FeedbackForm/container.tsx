import * as React from 'react'

import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'

import { SendFeedbackRequest } from '@app/lib/api/request/SendFeedback'
import { sendFeedback } from './actions'
import { Props as PageProps } from './FeedbackForm'

interface Props {
  send: (feedbackFields: SendFeedbackRequest) => Promise<any>
}

const Container = (WrappedComponent: React.ComponentType<PageProps>) => {
  return class extends React.Component<Props> {
    public render() {
      return (
        <WrappedComponent onFormSubmit={this.onFormSubmit} {...this.props} />
      )
    }

    public onFormSubmit = async (feedbackFields: SendFeedbackRequest) => {
      const { send } = this.props
      await send(feedbackFields)
    }
  }
}

const mapDipatch = (dispatch: Dispatch<AnyAction>) => ({
  send: (feedbackFields: SendFeedbackRequest) =>
    dispatch(sendFeedback(feedbackFields) as any),
})

export default compose(
  connect(
    null,
    mapDipatch,
  ),
  Container,
)
