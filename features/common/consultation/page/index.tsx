import * as React from 'react'

import { useMemo } from 'react'

import Head from 'next/head'

import cx from 'classnames'

import * as styles from './Consultation.css'

import Chat from '@app/features/common/chat'
import { WindowSize } from '@app/features/common/windowSize/selector'
import withWindowSize from '@app/features/common/windowSize/withWindowSize'
import { CHAT_DEFAULT_OPEN_WIDTH } from '@app/lib/config'
import Claim from '@app/models/Claim/Claim'
import { ShortClaim } from '@app/models/Claim/ShortClaim'
import { Role } from '@app/models/Users/User'
import { head } from 'lodash'
import OpenChatButton from '../atoms/OpenChatButton'
import ExpertAnswers from '../organisms/ExpertAnswers'
import Header from '../organisms/Header'
import Theme from '../organisms/Theme'
import { useDonationModalByUrl } from './useDonationModalByUrl'
import { useMappedState } from 'redux-react-hook'
import { selectQuotaCompanyName } from '@app/src/domain/landing/selectors/selectQuotaCompanyName'
import { ClearMorning } from '@app/features/client/features/consultation/organisms/QuestionNotification/components/clear-morning'

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
  host: string
  avon: boolean
}

export const Consultation = ({
  windowSize,
  claim,
  renderSubHeader,
  renderFooter,
  layout,
  roles,
  authorLogin,
  clientClaimsCount,
  hideAnswers,
  openMessage,
  host,
  avon,
}: Props) => {
  const [isChatOpen, setChatOpen] = React.useState(true)
  const [isChatOpensOnce, setChatOpensOnce] = React.useState(true)
  const [isChatFocused, setChatFocused] = React.useState(false)

  const isClient = useMemo(() => roles.includes(Role.Client), [roles])

  const closeChat = () => setChatOpen(false)

  const openChat = () => {
    setChatOpen(true)
    setChatOpensOnce(true)
  }

  const toggleChatOpening = (width: number) => {
    const needOpen = width > CHAT_DEFAULT_OPEN_WIDTH || openMessage
    if (needOpen) {
      openChat()
    } else {
      closeChat()
    }
  }

  React.useEffect(
    () => {
      const { width } = windowSize
      toggleChatOpening(width)
    },
    [windowSize.width],
  )

  const onChatButtonClick = () => {
    setChatFocused(true)
  }

  const setUnfocused = () => {
    setChatFocused(false)
  }

  const quotaCompany = useMappedState(selectQuotaCompanyName)

  const Layout = layout
  useDonationModalByUrl()
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
          <OpenChatButton haveNewMessage onClick={openChat} />
          <Header
            role={head(roles) as string}
            claimNumber={claim.mainInfo.number}
            clientClaimsCount={clientClaimsCount}
            claimId={claim.mainInfo.id}
            authorLogin={authorLogin}
            sponsor={{
              avon: (!!quotaCompany && quotaCompany === 'Avon') || avon,
            }}
          />
          {renderSubHeader && renderSubHeader(claim)}
          <Theme
            mainInfo={claim.mainInfo}
            shortClaim={claim.short}
            situationClaim={claim.situation}
          />
          {!hideAnswers && (
            <ExpertAnswers
              claim={claim.questions}
              mainInfo={claim.mainInfo}
              onChatButtonClick={onChatButtonClick}
              openChat={openChat}
            />
          )}
          {isClient && <ClearMorning />}
          {renderFooter && renderFooter(claim)}
        </Layout>
      </div>
      <Chat
        closeChat={closeChat}
        setUnfocused={setUnfocused}
        isOpen={isChatOpen}
        opensOnce={isChatOpensOnce}
        focused={isChatFocused}
        host={host}
      />
    </div>
  )
}

export default withWindowSize(Consultation) as any
