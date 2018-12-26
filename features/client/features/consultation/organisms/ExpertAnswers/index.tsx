import * as React from 'react'

import * as styles from './ExpertAnswers.css'

import Footer from './components/Footer'

interface Answer {
  question: string
  answer: string
}

interface Answer {
  title: string
  articles: Answer[]
}

interface Props {
  answers: Answer[]
}

const ExpertAnswers = ({ answers }: Props) => (
  <>
    <h2 className={styles.mainTitle}>Ответ эксперта</h2>
    <section className={styles.expertAnswers}>
      {answers.map(answer => {
        const articles = answer.articles.map(article => (
          <div key={article.question} className={styles.articleWrapper}>
            <p className={styles.question}>{article.question}</p>
            <p className={styles.answer}>{article.answer}</p>
          </div>
        ))
        return (
          <article key={answer.title} className={styles.article}>
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
