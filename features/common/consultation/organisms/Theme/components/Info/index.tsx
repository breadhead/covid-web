import * as React from 'react'

import { StylesType } from '@app/lib/config'
import { SituationClaim } from '@app/models/Claim/SituationClaim'

import claimToInfoBlocks from './helpers/claimToInfoBlocks'
import { Article } from './helpers/types'

interface Props {
  styles: StylesType
  claim: SituationClaim
}

const createRenderFlat = (styles: any) => (article: Article) => (
  <div className={styles.infoBlock} key={article.subtitle}>
    <h3 className={styles.subtitle}>{article.subtitle}</h3>
    <p className={styles.text}>{article.text}</p>
  </div>
)

const createRenderCompose = (styles: any) => (article: Article) => (
  <div className={styles.infoBlock} key={article.subtitle}>
    <h3 className={styles.title}>{article.subtitle}</h3>
    {(article.children || []).map(({ subtitle, children }) => (
      <>
        <h3 className={styles.midtitle}>{subtitle}</h3>
        {(children || []).map(createRenderFlat(styles))}
      </>
    ))}
  </div>
)

const Info = ({ styles, claim }: Props) => {
  const renderFlat = createRenderFlat(styles)
  const renderCompose = createRenderCompose(styles)

  return (
    <>
      {claimToInfoBlocks(claim).map(({ articles, title }) => {
        const content = articles.map(article => {
          if (!article.children) {
            return renderFlat(article)
          }

          if (!!article.children) {
            return renderCompose(article)
          }
        })

        return (
          <article className={styles.article} key={title}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.common}>{content}</div>
          </article>
        )
      })}
    </>
  )
}

export default Info
