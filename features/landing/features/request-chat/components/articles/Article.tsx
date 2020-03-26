import * as React from 'react';

interface ArticleProps {
  children: any
}

export const Article = ({ children }: ArticleProps) => {
  return (<article>{children}</article>)
}
