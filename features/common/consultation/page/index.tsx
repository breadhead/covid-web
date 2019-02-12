import * as React from 'react'

import Head from 'next/head'

import cx from 'classnames'

import * as styles from './Consultation.css'

import { WindowSize } from '@app/features/common/windowSize/selector'
import withWindowSize from '@app/features/common/windowSize/withWindowSize'
import { CHAT_DEFAULT_OPEN_WIDTH } from '@app/lib/config'
import Claim from '@app/models/Claim/Claim'

import Chat from '@app/features/common/chat'

import { getRoles } from '@app/features/login'
import { State as AppState } from '@app/lib/store'
import { ListedClaim } from '@app/models/Claim/ListedClaim'
import { Role } from '@app/models/Users/User'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import OpenChatButton from '../atoms/OpenChatButton'
import ExpertAnswers from '../organisms/ExpertAnswers'
import Header from '../organisms/Header'
import Theme from '../organisms/Theme'
import { getMainInfo } from '../selectors'
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
  roles: Role[]
  mainInfo: ListedClaim
  authorLogin: string
}

class Consultation extends React.Component<Props & any, State> {
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
      roles,
      mainInfo,
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
            <Head>
              <title>Ваша заявка | Просто спросить</title>
            </Head>
            <OpenChatButton
              haveNewMessage={haveNewMessage}
              onClick={this.openChat}
            />
            <Header
              id={mainInfo.id}
              role={roles[0]}
              claimNumber={claim.mainInfo.number}
            />
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

const mapState = (state: AppState) => ({
  roles: getRoles(state),
  mainInfo: getMainInfo(state),
})

export default compose(
  withWindowSize,
  connect(mapState),
)(Consultation) as any
