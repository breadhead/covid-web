import * as React from 'react'

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

const Consultation = () => (
  <div className={styles.wrapper}>
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
    <Chat isVisible messages={MockMessages} />
  </div>
)

export default Consultation
