import * as React from 'react'

import Head from 'next/head'

import cx from 'classnames'

import * as styles from './Consultation.css'

import { WindowSize } from '@app/features/common/windowSize/selector'
import withWindowSize from '@app/features/common/windowSize/withWindowSize'
import { CHAT_DEFAULT_OPEN_WIDTH } from '@app/lib/config'
import Claim from '@app/models/Claim/Claim'

import Chat from '@app/features/common/chat'

import { ShortClaim } from '@app/models/Claim/ShortClaim'
import { Role } from '@app/models/Users/User'
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
  roles: Role[]
  clientClaims: ShortClaim[]
  getListOfClientClaims: (login: string) => Promise<any>
  authorLogin: string
  clientClaimsCount: number
  hideAnswers?: boolean
  openMessage: boolean
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
      roles,
      clientClaimsCount,
      authorLogin,
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
              role={roles[0]}
              claimNumber={claim.mainInfo.number}
              clientClaimsCount={clientClaimsCount}
              claimId={claim.mainInfo.id}
              authorLogin={authorLogin}
            />
            {renderSubHeader && renderSubHeader(claim)}
            <Theme
              mainInfo={claim.mainInfo}
              shortClaim={claim.short}
              situationClaim={claim.situation}
            />
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
    const { openMessage } = this.props
    const needOpen = width > CHAT_DEFAULT_OPEN_WIDTH || openMessage
    if (needOpen) {
      this.openChat()
    } else {
      this.closeChat()
    }
  }
}

export default withWindowSize(Consultation) as any
