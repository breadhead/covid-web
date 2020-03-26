import * as React from 'react'
import { NavLink } from '@front/ui/nav-link'
import * as s from './ArticlesList.css'
interface Article {
  title: string
  link: string
}
interface ArticlesListProps {
  articles: Article[]
}

export const ArticlesList = ({ articles }: ArticlesListProps) => {
  return (
    <section className={s.wrapper}>
      {articles.map(art => {
        return (
          <NavLink
            withoutUnderline
            className={s.article} blank href={art.link} key={art.link}>
            <h3 className={s.title}>{art.title}</h3>
          </NavLink>
        )
      })}
    </section>
  )
}
