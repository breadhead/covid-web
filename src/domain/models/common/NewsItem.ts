import { SanityBase } from '@app/src/domain/models/sanity/SanityBase';
import { Photo } from '@app/src/domain/models/sanity/Photo';
import { Block } from '@app/src/domain/models/sanity/Block';

import { CategoryType } from './NewsCategoryType';
import { TagType } from './Tag';

export interface NewsItem extends SanityBase {
  status: boolean;
  name: string;
  sortIndex: number;
  code: { current: string };
  image?: Photo;
  content?: Block[];
  showOnMain?: boolean;
  categories?: CategoryType[];
  tags?: TagType[];
}
