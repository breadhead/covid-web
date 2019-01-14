import * as React from 'react'

import cx from 'classnames'

import * as styles from './Consultation.css'

import { WindowSize } from '@app/features/common/windowSize/selector'
import withWindowSize from '@app/features/common/windowSize/withWindowSize'
import Claim from '@app/models/Claim/Claim'

import { CHAT_DEFAULT_OPEN_WIDTH } from '@app/lib/config'

import Chat from '@app/features/common/chat'

import OpenChatButton from '../atoms/OpenChatButton'
import ExpertAnswers from '../organisms/ExpertAnswers'
import Header from '../organisms/Header'
import Theme from '../organisms/Theme'

interface State {
  isChatOpen: boolean
  haveNewMessage: boolean
  chatOpensOnce: boolean
}

export interface Props {
  windowSize: WindowSize
  claim: Claim
  renderSubHeader?: (claim: Claim) => React.ReactNode
  renderFooter?: (claim: Claim) => React.ReactNode
  layout: React.ComponentType
  hideAnswers?: boolean
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
    const {
      renderSubHeader,
      renderFooter,
      layout,
      claim,
      hideAnswers,
    } = this.props

    const Layout = layout

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
            <Header claimNumber={claim.mainInfo.number} />
            {renderSubHeader && renderSubHeader(claim)}
            <Theme shortClaim={claim.short} situationClaim={claim.situation} />
            {!hideAnswers && <ExpertAnswers claim={claim.questions} />}
            {renderFooter && renderFooter(claim)}
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
