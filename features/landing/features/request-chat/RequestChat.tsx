import ClientLayout from '@app/features/client/organisms/Layout'
import { FooterTheme } from '@app/ui/organisms/Footer'
import React from 'react'
import { Chat } from './Chat'
import { AskButton } from './components/askButton'
import { Conclution } from './components/Conclusion'
import * as styles from './RequestChat.css'

import { isFormRequestFinished } from '../request/organisms/RequestForm/localStorage'
import routes from '@app/routes'


const { Router } = routes


export const RequestChat = () => {
  const formFinished = isFormRequestFinished()
  if (!formFinished && typeof window !== 'undefined') {
    Router.pushRoute('/request')
  }

  return (
    <ClientLayout
      headerClassName={styles.mainHeader}
      pageClassName={styles.page}
      footerTheme={FooterTheme.White}
    >
      <div className={styles.logo}>
        <img className={styles.image} src="/static/images/2-step.png" />
      </div>
      <Conclution />
      <AskButton>Спросить в чате 🤖👩🏻‍⚕️ &gt;</AskButton>
      <Chat />
    </ClientLayout>
  )
}
