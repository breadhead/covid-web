import cx from 'classnames'
import * as React from 'react'

import { ShortClaim } from '@app/models/Claim/ShortClaim'
import { SituationClaim } from '@app/models/Claim/SituationClaim'

import * as styles from './Consultation.css'

import Layout from '../../../organisms/Layout'
import Chat from '../../chat'
import OpenChatButton from '../atoms/OpenChatButton'
import AnswerNotification from '../organisms/AnswerNotification'
import Company from '../organisms/Company'
import ExpertAnswers from '../organisms/ExpertAnswers'
import { Answers } from '../organisms/ExpertAnswers/config'
import Header from '../organisms/Header'
import QuestionNotification from '../organisms/QuestionNotification'
import Theme from '../organisms/Theme'

interface State {
  isChatOpen: boolean
  haveNewMessage: boolean
}

export interface Props {
  shortClaim: ShortClaim
  situationClaim: SituationClaim
}

class Consultation extends React.Component<Props, State> {
  public state = {
    isChatOpen: true,
    haveNewMessage: false,
  }

  public render() {
    const { isChatOpen, haveNewMessage } = this.state
    const { shortClaim, situationClaim } = this.props

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
            <Theme shortClaim={shortClaim} situationClaim={situationClaim} />
            {/* <ExpertAnswers answers={Answers} /> */}{' '}
            {/* TODO: вернуть когда будет готов третий шаг */}
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
