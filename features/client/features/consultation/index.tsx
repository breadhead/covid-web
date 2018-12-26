import * as React from 'react'

import Layout from '../../organisms/Layout'
import AnswerNotification from './organisms/AnswerNotification'
import Chat from './organisms/Chat'
import { MockMessages } from './organisms/Chat/components/config'
import Company from './organisms/Company'
import ExpertAnswers from './organisms/ExpertAnswers'
import { Answers } from './organisms/ExpertAnswers/config'
import Header from './organisms/Header'
import QuestionNotification from './organisms/QuestionNotification'
import Theme from './organisms/Theme'

const Consultation = () => (
  <Layout>
    <Header />
    <Company />
    <AnswerNotification />
    <Theme />
    <ExpertAnswers answers={Answers} />
    <QuestionNotification />
    <Chat messages={MockMessages} />
  </Layout>
)

export default Consultation
