import * as React from 'react'

import cx from 'classnames'

import * as styles from './Consultation.css'

import Chat, { MockMessages } from '../../features/chat'
import Layout from '../../organisms/Layout'
import AnswerNotification from './organisms/AnswerNotification'
import Company from './organisms/Company'
import ExpertAnswers from './organisms/ExpertAnswers'
import { Answers } from './organisms/ExpertAnswers/config'
import Header from './organisms/Header'
import QuestionNotification from './organisms/QuestionNotification'
import Theme from './organisms/Theme'

interface State {
  isChatOpen: boolean
}

class Consultation extends React.Component<{}, State> {
  public state = {
    isChatOpen: true,
  }

  public render() {
    const { isChatOpen } = this.state
    return (
      <div
        className={
          isChatOpen ? cx(styles.wrapper, styles.openChat) : styles.wrapper
        }
      >
        <div className={styles.layoutWrapper}>
          <Layout>
            <Header />
            <Company />
            <AnswerNotification />
            <Theme onChatButtonClick={this.openChat} />
            <ExpertAnswers answers={Answers} />
            <QuestionNotification />
          </Layout>
        </div>
        <Chat
          closeChat={this.closeChat}
          // tslint:disable-next-line
          sendMessage={() => console.log('message is sent')}
          isOpen={isChatOpen}
          messages={MockMessages}
        />
      </div>
    )
  }

  private closeChat = () => this.setState({ isChatOpen: false })

  private openChat = () => this.setState({ isChatOpen: true })
}

export default Consultation
