import { SanityBase } from '@app/src/domain/models/sanity/SanityBase';
export interface TagType extends SanityBase {
  name: string;
  code: {
    current: string;
  };
  sortIndex: number;
  status: boolean;
  newsCount: number;
  articlesCount: number;
  count: { [key: string]: number | undefined };
}
