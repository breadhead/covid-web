import React from 'react'

import * as styles from './RequestChat.css'
import { FooterTheme } from '@app/ui/organisms/Footer'
import ClientLayout from '@app/features/client/organisms/Layout'

import { AskButton } from './components/askButton'
import { Chat } from './Chat'
import { Conclution } from './components/conclution'


export const RequestChat = () => {


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
