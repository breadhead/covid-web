import * as React from 'react'

import cx from 'classnames'

import * as styles from './Consultation.css'

import { WindowSize } from '@app/features/common/windowSize/selector'
import withWindowSize from '@app/features/common/windowSize/withWindowSize'

import Chat from '../../features/chat'
import Layout from '../../organisms/Layout'
import OpenChatButton from './atoms/OpenChatButton'
import AnswerNotification from './organisms/AnswerNotification'
import Company from './organisms/Company'
import ExpertAnswers from './organisms/ExpertAnswers'
import { Answers } from './organisms/ExpertAnswers/config'
import Header from './organisms/Header'
import QuestionNotification from './organisms/QuestionNotification'
import Theme from './organisms/Theme'

import { CHAT_DEFAULT_OPEN_WIDTH } from '@app/lib/config'

interface State {
  isChatOpen: boolean
  haveNewMessage: boolean
}

interface Props {
  windowSize: WindowSize
}

class Consultation extends React.Component<Props, State> {
  public state = {
    isChatOpen: false,
    haveNewMessage: false,
  }

  public componentDidMount() {
    const { width } = this.props.windowSize

    this.toggleChatOpening(width)
  }

  public componentDidUpdate(prevProps: Props) {
    const { width } = this.props.windowSize

    if (width !== prevProps.windowSize.width) {
      this.toggleChatOpening(width)
    }
  }

  public render() {
    const { isChatOpen, haveNewMessage } = this.state
    return (
      <div
        className={
          isChatOpen ? cx(styles.wrapper, styles.openChat) : styles.wrapper
        }
      >
        <div className={styles.layoutWrapper}>
          <Layout>
            <OpenChatButton
              haveNewMessage={haveNewMessage}
              onClick={this.openChat}
            />
            <Header />
            <Company />
            <AnswerNotification />
            <Theme />
            <ExpertAnswers answers={Answers} />
            <QuestionNotification />
          </Layout>
        </div>
        <Chat closeChat={this.closeChat} isOpen={isChatOpen} />
      </div>
    )
  }

  private closeChat = () => this.setState({ isChatOpen: false })

  private openChat = () => this.setState({ isChatOpen: true })

  private toggleChatOpening = (width: number) =>
    width > CHAT_DEFAULT_OPEN_WIDTH ? this.openChat() : this.closeChat()
}

export default withWindowSize(Consultation)
