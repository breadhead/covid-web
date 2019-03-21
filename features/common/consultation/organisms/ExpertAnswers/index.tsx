import * as React from 'react'

import { AnswerClaim, Question } from '@app/models/Claim/AnswerClaim'

import * as styles from './ExpertAnswers.css'

import { ListedClaim } from '@app/models/Claim/ListedClaim'
import answered from './answered'
import Footer from './components/Footer'
import { makeQuestionGroups } from './helpers/makeQuestionGroups'

interface Props {
  claim: AnswerClaim
  mainInfo: ListedClaim
  renderCustomAnswer?: (theme: string, question: Question) => React.ReactNode
  title?: string
}

const ExpertAnswers = ({
  claim,
  renderCustomAnswer,
  title,
  mainInfo,
}: Props) => {
  const answeredClaim = answered(claim)

  const groups = makeQuestionGroups(claim)

  const questionsAvailable = Object.keys(groups).length > 0

  return questionsAvailable ? (
    <>
      <h2 className={styles.mainTitle}>
        {!!title && title}
        {!title && (answeredClaim ? 'Ответ эксперта' : 'Вопросы эксперту')}
      </h2>
      <section
        id={answeredClaim ? 'expert-answers' : undefined}
        className={styles.expertAnswers}
      >
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
        <Footer
          answeredAt={mainInfo.answeredAt}
          answerUpdatedAt={mainInfo.answerUpdatedAt}
        />
      </section>
    </>
  ) : null
}

export default ExpertAnswers
