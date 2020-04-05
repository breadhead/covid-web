import * as React from 'react';

import { NavLink } from '@app/src/ui/nav-link';

import * as styles from './ArticlesList.css';
interface Article {
  title: string;
  link: string;
}
interface ArticlesListProps {
  articles: Article[];
}

export const ArticlesList = ({ articles }: ArticlesListProps) => {
  return (
    <section className={styles.wrapper}>
      {articles.map((art) => {
        return (
          <NavLink
            withoutUnderline
            className={styles.article}
            blank
            href={art.link}
            key={art.link}
          >
            <h3 className={styles.title}>{art.title}</h3>
          </NavLink>
        );
      })}
    </section>
  );
};
