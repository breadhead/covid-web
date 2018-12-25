import * as React from 'react'

import * as styles from './ExpertAnswers.css'

import { Answers } from './config'

import Footer from './components/Footer'

interface Answer {
  title: string
  articles: Array<{
    question: string
    answer: string
  }>
}

interface Props {
  answers: Answer[]
}

const ExpertAnswers = ({ answers }: Props) => (
  <>
    <h2 className={styles.mainTitle}>Ответ эксперта</h2>
    <section className={styles.expertAnswers}>
      {Answers.map(answer => {
        const articles = answer.articles.map(article => (
          <>
            <p className={styles.question}>{article.question}</p>
            <p className={styles.answer}>{article.answer}</p>
          </>
        ))
        return (
          <article className={styles.article}>
            <h2 className={styles.title}>{answer.title}</h2>
            {articles}
          </article>
        )
      })}
      <Footer />
    </section>
  </>
)

export default ExpertAnswers
