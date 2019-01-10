import * as React from 'react'

import { StylesType } from '@app/lib/config'
import { SituationClaim } from '@app/models/Claim/SituationClaim'

import claimToInfoBlocks from './helpers/claimToInfoBlocks'

interface Props {
  styles: StylesType
  claim: SituationClaim
}

const Info = ({ styles, claim }: Props) => (
  <>
    {claimToInfoBlocks(claim).map(({ articles, title }) => {
      const content = articles.map(article => (
        <div className={styles.infoBlock} key={article.subtitle}>
          <h3 className={styles.subtitle}>{article.subtitle}</h3>
          <p className={styles.text}>{article.text}</p>
        </div>
      ))

      return (
        <article className={styles.article} key={title}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.common}>{content}</div>
        </article>
      )
    })}
  </>
)

export default Info
