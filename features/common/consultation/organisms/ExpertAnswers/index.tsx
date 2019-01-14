import * as React from 'react'

import { AnswerClaim } from '@app/models/Claim/AnswerClaim'

import * as styles from './ExpertAnswers.css'

import answered from './answered'
import Footer from './components/Footer'
import groupQuestion from './groupQuestions'

interface Props {
  claim: AnswerClaim
}

const ExpertAnswers = ({ claim }: Props) => {
  const answeredClaim = answered(claim)

  const groups = groupQuestion(claim.defaultQuestions)

  return (
    <>
      <h2 className={styles.mainTitle}>
        {answeredClaim ? 'Ответ эксперта' : 'Вопросы эксперту'}
      </h2>
      <section className={styles.expertAnswers}>
        {Object.entries(groups).map(([theme, questions]) => (
          <article key={theme} className={styles.article}>
            <h2 className={styles.title}>{theme}</h2>
            {questions.map(({ question, answer }) => (
              <div key={question} className={styles.articleWrapper}>
                <p className={styles.question}>{question}</p>
                {answeredClaim && answer && (
                  <p className={styles.answer}>{answer}</p>
                )}
              </div>
            ))}
          </article>
        ))}
        <Footer />
      </section>
    </>
  )
}

export default ExpertAnswers
