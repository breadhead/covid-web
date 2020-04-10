import { createContext, useContext } from 'react';

import { ArticlesItem } from '@app/src/domain/models/common/ArticlesItem';

interface ArticleContextType {
  data?: ArticlesItem;
}

export const articleContext = createContext<ArticleContextType>({});

export const useArticleContext = () => useContext(articleContext);
