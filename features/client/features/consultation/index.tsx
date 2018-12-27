import * as React from 'react'

import cx from 'classnames'

import * as styles from './Consultation.css'

import Layout from '../../organisms/Layout'
import AnswerNotification from './organisms/AnswerNotification'
import Chat from './organisms/Chat'
import { MockMessages } from './organisms/Chat/config'
import Company from './organisms/Company'
import ExpertAnswers from './organisms/ExpertAnswers'
import { Answers } from './organisms/ExpertAnswers/config'
import Header from './organisms/Header'
import QuestionNotification from './organisms/QuestionNotification'
import Theme from './organisms/Theme'

interface State {
  isChatVisible: boolean
}

class Consultation extends React.Component<{}, State> {
  public state = {
    isChatVisible: true,
  }

  public render() {
    const { isChatVisible } = this.state
    return (
      <div
        className={
          isChatVisible ? cx(styles.wrapper, styles.openChat) : styles.wrapper
        }
      >
        <div className={styles.layoutWrapper}>
          <Layout>
            <Header />
            <Company />
            <AnswerNotification />
            <Theme />
            <ExpertAnswers answers={Answers} />
            <QuestionNotification />
          </Layout>
        </div>
        <Chat
          close={this.CloseChat}
          isVisible={isChatVisible}
          messages={MockMessages}
        />
      </div>
    )
  }

  private CloseChat = () => this.setState({ isChatVisible: false })
}

export default Consultation
