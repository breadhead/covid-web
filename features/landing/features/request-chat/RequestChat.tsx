import ClientLayout from '@app/features/client/organisms/Layout'
import { FooterTheme } from '@app/ui/organisms/Footer'
import React from 'react'
import { Chat } from './Chat'
import { AskButton } from './components/askButton'
import { Conclution } from './components/Conclusion'
import * as styles from './RequestChat.css'

import {
  isFormRequestFinished,
  setFormRequestFinished,
  resetRequestFormDraft,
} from '../request/organisms/RequestForm/localStorage'
import routes from '@app/routes'
import { useEmail } from '../../../login/features/signIn/useEmail'

const { Router } = routes

export const RequestChat = () => {
  const email = useEmail()

  const formFinished = isFormRequestFinished()
  if (!formFinished && typeof window !== 'undefined') {
    Router.pushRoute('/request')
  }

  const onRepeatTestClick = () => {
    setFormRequestFinished(false)
    resetRequestFormDraft()

    Router.pushRoute('/request')
  }

  return (
    <ClientLayout
      headerClassName={styles.mainHeader}
      pageClassName={styles.page}
      footerTheme={FooterTheme.White}
    >
      <div className={styles.wrapper}>
        <Conclution />
  
        <AskButton>Спросить в чате</AskButton>
        {email ? (
          <button onClick={onRepeatTestClick} className={styles.repeatTestButton}>
            Пройти тест заново
          </button>
        ) : (
            <p className={styles.registrationDisclamer}>
              Потребуется регистрация, чтобы вы могли вернуться к чату в любой
              момент
            </p>
          )}
      </div>
      <Chat />
    </ClientLayout>
  )
}
