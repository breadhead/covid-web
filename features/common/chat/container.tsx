import withLockScroll from '@breadhead/with-scroll-lock'
import nanoid from 'nanoid'
import * as React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { AnyAction, Dispatch } from 'redux'
import { Omit } from 'utility-types'

import { getQuery } from '@app/features/common/browserQuery'
import { State } from '@app/lib/store'
import { ChatMessage } from '@app/models/Claim/ChatMessage'

import withWindowSize, { WindowSize } from '../windowSize'
import { fetch, send } from './actions'
import { FormFileds, Props as PageProps } from './page'
import { getLoaded, getMessages } from './selectors'

const MOBILE_WIDTH = 720

interface Query {
  id: string
}

interface OwnProps {
  sendMessage: (claimId: string, message: ChatMessage) => Promise<void>
  fetchMessages: (claimId: string) => Promise<void>
  messages: ChatMessage[]
  query: Query
  isOpen: boolean
  loaded: boolean
  windowSize: WindowSize
  bodyScrolling: { lock: () => void; unlock: () => void }
}

type ResultPageProps = Omit<PageProps, 'messages' | 'onSubmit'>
type Props = OwnProps & ResultPageProps

const Container = (WrappedComponent: React.ComponentType<PageProps>) => {
  return class extends React.Component<Props, {}> {
    private messages = React.createRef<HTMLDivElement>()
    public async componentDidMount() {
      await this.fetchMessages()
      this.scrollToBottom()
    }

    public async componentDidUpdate({ isOpen }: Props) {
      await this.fetchMessages()
      this.scrollToBottom()
      const { isOpen: currentIsOpen } = this.props

      if (isOpen !== currentIsOpen) {
        this.handleChatStatusChange(currentIsOpen)
      }
    }

    public render() {
      return (
        <WrappedComponent
          onSubmit={this.send}
          forwardedRef={this.messages}
          onTextAreaFocus={this.onTextAreaFocus}
          {...this.props}
        />
      )
    }

    private handleChatStatusChange = (isOpen: boolean) => {
      const {
        windowSize: { width },
        bodyScrolling: { lock, unlock },
      } = this.props

      if (MOBILE_WIDTH > width) {
        if (isOpen) {
          lock()
        } else {
          unlock()
        }
      }
    }

    private scrollToBottom = () => {
      const ref = this.messages.current
      if (ref) {
        ref.scrollTop = ref.scrollHeight
      }
    }

    private onTextAreaFocus = () => {
      const {
        windowSize: { width },
      } = this.props

      if (MOBILE_WIDTH > width) {
        this.scrollToBottom()
      }
    }

    private send = ({ message }: FormFileds) => {
      const { query, sendMessage } = this.props

      return sendMessage(query.id, {
        id: nanoid(),
        content: message,
        date: new Date(),
      })
    }

    private fetchMessages = () => {
      const { query, fetchMessages, loaded } = this.props

      if (query.id && !loaded) {
        fetchMessages(query.id)
      }
    }
  }
}

const mapState = (state: State) => ({
  messages: getMessages(state),
  query: getQuery<Query>(state),
  loaded: getLoaded(state),
})

const mapDipatch = (dispatch: Dispatch<AnyAction>) => ({
  sendMessage: (claimId: string, message: ChatMessage) =>
    dispatch(send(claimId, message) as any),
  fetchMessages: (claimId: string) => dispatch(fetch(claimId) as any),
})

export default compose<PageProps, ResultPageProps>(
  withWindowSize,
  withLockScroll(true),
  connect(
    mapState,
    mapDipatch,
  ),
  Container,
)
