import * as React from 'react'

import { AnswerClaim, Question } from '@app/models/Claim/AnswerClaim'

import * as styles from './ExpertAnswers.css'

import answered from './answered'
import Footer from './components/Footer'
import { makeQuestionGroups } from './helpers/makeQuestionGroups'

interface Props {
  claim: AnswerClaim
  renderCustomAnswer?: (theme: string, question: Question) => React.ReactNode
  title?: string
}

const ExpertAnswers = ({ claim, renderCustomAnswer, title }: Props) => {
  const answeredClaim = answered(claim)

  const groups = makeQuestionGroups(claim)

  const questionsAvailable = Object.keys(groups).length > 0

  return questionsAvailable ? (
    <>
      <h2 className={styles.mainTitle}>
        {!!title && title}
        {!title && (answeredClaim ? 'Ответ эксперта' : 'Вопросы эксперту')}
      </h2>
      <section id="expert-answers" className={styles.expertAnswers}>
        {Object.entries(groups).map(([theme, questions]) => (
          <article key={theme} className={styles.article}>
            <h2 className={styles.title}>{theme}</h2>
            {questions.map(({ question, answer }) => (
              <div key={question} className={styles.articleWrapper}>
                <p className={styles.question}>{question}</p>
                {!!renderCustomAnswer &&
                  renderCustomAnswer(theme, { question, answer })}
                {!renderCustomAnswer && answeredClaim && answer && (
                  <p className={styles.answer}>{answer}</p>
                )}
              </div>
            ))}
          </article>
        ))}
        <Footer />
      </section>
    </>
  ) : null
}

export default ExpertAnswers
