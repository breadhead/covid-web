import * as React from 'react'

import cx from 'classnames'

import * as styles from './Consultation.css'

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

interface State {
  isChatOpen: boolean
  haveNewMessage: boolean
}

class Consultation extends React.Component<{}, State> {
  public state = {
    isChatOpen: true,
    haveNewMessage: false,
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
}

export default Consultation
