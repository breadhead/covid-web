export const PER_PAGE_ARTICLES = 10;

export interface ArticlesQuery {
  page?: string;
  category?: string;
  tags?: string;
}

export interface ArticlesFetchParams {
  page: number;
  category: string;
  tags: string[];
}
