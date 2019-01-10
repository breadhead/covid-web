import * as React from 'react'

import cx from 'classnames'

import * as styles from './Consultation.css'

import { WindowSize } from '@app/features/common/windowSize/selector'
import withWindowSize from '@app/features/common/windowSize/withWindowSize'

import { CHAT_DEFAULT_OPEN_WIDTH } from '@app/lib/config'
import { QuotaClaim } from '@app/models/Claim/QuotaClaim'
import { ShortClaim } from '@app/models/Claim/ShortClaim'
import { SituationClaim } from '@app/models/Claim/SituationClaim'

import { Chat } from '@app/features/client'
import Layout from '@app/features/client/organisms/Layout'
import OpenChatButton from '../atoms/OpenChatButton'
import Badge from '../organisms/Badge'
import Company from '../organisms/Company'
import Header from '../organisms/Header'
import Theme from '../organisms/Theme'

interface State {
  isChatOpen: boolean
  haveNewMessage: boolean
  chatOpensOnce: boolean
}

export interface Props {
  windowSize: WindowSize
  shortClaim: ShortClaim
  situationClaim: SituationClaim
  quotaClaim: QuotaClaim
}

class Consultation extends React.Component<Props, State> {
  public state = {
    isChatOpen: true,
    chatOpensOnce: false,
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
    const { isChatOpen, haveNewMessage, chatOpensOnce } = this.state
    const { shortClaim, situationClaim, quotaClaim } = this.props

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
            <Badge />
            <Company quotaClaim={quotaClaim} />
            <Theme shortClaim={shortClaim} situationClaim={situationClaim} />
            {/* TODO: вернуть когда будет готов третий шаг */}
          </Layout>
        </div>
        <Chat
          closeChat={this.closeChat}
          isOpen={isChatOpen}
          opensOnce={chatOpensOnce}
        />
      </div>
    )
  }

  private closeChat = () => this.setState({ isChatOpen: false })

  private openChat = () =>
    this.setState({ isChatOpen: true, chatOpensOnce: true })

  private toggleChatOpening = (width: number) => {
    const needOpen = width > CHAT_DEFAULT_OPEN_WIDTH

    if (needOpen) {
      this.openChat()
    } else {
      this.closeChat()
    }
  }
}

export default withWindowSize(Consultation)
