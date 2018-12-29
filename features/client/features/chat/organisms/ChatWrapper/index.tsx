import * as React from 'react'

import { ChatMessage } from '@app/models/Claim/ChatMessage'

import * as styles from './ChatWrapper.css'

import { EmptyWindowText } from '../../page/config'
import EmptyWindow from '../EmptyWindow'
import Message from '../Message'

interface Props {
  messages: ChatMessage[]
}

class ChatWrapper extends React.Component<Props> {
  private myRef = React.createRef<HTMLDivElement>()

  public scrollToBottom = () => {
    if (this.myRef.current) {
      this.myRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  public componentDidMount() {
    this.scrollToBottom()
  }

  public componentDidUpdate() {
    this.scrollToBottom()
  }

  public render() {
    const { messages } = this.props

    return messages.length === 0 ? (
      <EmptyWindow text={EmptyWindowText} />
    ) : (
      <div className={styles.chatWrapper} ref={this.myRef}>
        {messages.map(message => (
          <Message key={message.id} message={message} />
        ))}
      </div>
    )
  }
}

export default ChatWrapper
