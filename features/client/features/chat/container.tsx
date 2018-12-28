import nanoid from 'nanoid'
import * as React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { AnyAction, Dispatch } from 'redux'
import { Omit } from 'utility-types'

import { State } from '@app/lib/store'
import { ChatMessage } from '@app/models/Claim/ChatMessage'

import { send } from './actions'
import { FormFileds, Props as PageProps } from './page'
import { getMessages } from './selectors'

interface OwnProps {
  sendMessage: (claimId: string, message: ChatMessage) => Promise<void>
  messages: ChatMessage[]
}

type ResultPageProps = Omit<PageProps, 'messages' | 'onSubmit'>
type Props = OwnProps & ResultPageProps

const Container = (WrappedComponent: React.ComponentType<PageProps>) => {
  return class extends React.Component<Props, {}> {
    public render() {
      return <WrappedComponent onSubmit={this.send} {...this.props} />
    }

    private send = ({ message }: FormFileds) => {
      const existingContents = this.props.messages.map(({ content }) => content)

      if (existingContents.includes(message)) {
        return Promise.resolve()
      }

      return this.props.sendMessage('NCUJd646WumNn2', {
        id: nanoid(),
        content: message,
        date: new Date(),
      })
    }
  }
}

const mapState = (state: State) => ({
  messages: getMessages(state),
})

const mapDipatch = (dispatch: Dispatch<AnyAction>) => ({
  sendMessage: (claimId: string, message: ChatMessage) =>
    dispatch(send(claimId, message) as any),
})

export default compose<PageProps, ResultPageProps>(
  connect(
    mapState,
    mapDipatch,
  ),
  Container,
)
