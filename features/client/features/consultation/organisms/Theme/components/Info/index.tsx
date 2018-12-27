import * as React from 'react'

import { StylesType } from '@app/lib/config'

interface Article {
  subtitle: string
  text: string
}

interface InfoBlock {
  title: string
  articles: Article[]
}

interface Props {
  styles: StylesType
  data: InfoBlock[]
}

const Info = ({ styles, data }: Props) => (
  <>
    {data.map((item: InfoBlock) => {
      const articles = item.articles.map(article => (
        <div className={styles.infoBlock} key={article.subtitle}>
          <h3 className={styles.subtitle}>{article.subtitle}</h3>
          <p className={styles.text}>{article.text}</p>
        </div>
      ))

      return (
        <article className={styles.article} key={item.title}>
          <h2 className={styles.title}>{item.title}</h2>
          <div className={styles.common}>{articles}</div>
        </article>
      )
    })}
  </>
)

export default Info
