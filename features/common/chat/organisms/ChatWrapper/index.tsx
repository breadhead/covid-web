import * as React from 'react'
import { animateScroll as scroll } from 'react-scroll'

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
    // scroll.scrollToBottom({
    //   container: this.myRef.current,
    //   duration: 300,
    //   smooth: 'easeInOutQuint',
    // })
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
      <div id="chatWrapper" className={styles.chatWrapper} ref={this.myRef}>
        {messages.map(message => (
          <Message key={message.id} message={message} />
        ))}
      </div>
    )
  }
}

export default ChatWrapper
