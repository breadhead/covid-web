export const PER_PAGE_NEWS = 10;

export interface NewsQuery {
  page?: string;
  category?: string;
  tags?: string;
}

export interface NewsFetchParams {
  page: number;
  category: string;
  tags: string[];
}
