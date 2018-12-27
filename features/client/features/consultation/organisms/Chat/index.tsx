import * as React from 'react'

import * as styles from './Chat.css'

import Input from '@app/ui/atoms/Input'
import Header from './components/Header'
import Message, { MessageType } from './components/Message'

interface Props {
  messages: MessageType[]
  isVisible: boolean
}

interface State {
  isVisible: boolean
}

class Chat extends React.Component<Props, State> {
  public state = {
    isVisible: this.props.isVisible,
  }

  public onCloseButtonClick = () => this.setState({ isVisible: false })

  public render() {
    const { isVisible } = this.state
    const { messages } = this.props

    return isVisible ? (
      <section className={styles.chat}>
        <div>
          <Header onCloseButtonClick={this.onCloseButtonClick} />
        </div>
        <div className={styles.messageWrapper}>
          <div className={styles.chatWrapper}>
            {messages.map(message => (
              <Message key={message.id} message={message} />
            ))}
          </div>
        </div>
        <Input
          className={styles.input}
          name="message"
          placeholder="Ваше сообщение..."
        />
      </section>
    ) : null
  }
}

export default Chat
