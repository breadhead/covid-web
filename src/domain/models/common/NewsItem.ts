import { SanityBase } from '@app/src/domain/models/sanity/SanityBase';
import { Photo } from '@app/src/domain/models/sanity/Photo';
import { Block } from '@app/src/domain/models/sanity/Block';

import { CategoryType } from './NewsCategoryType';
import { TagType } from './Tag';

export interface NewsItem extends SanityBase {
  status: boolean;
  name: string;
  showOnMain: boolean;
  sortIndex: number;
  image?: Photo;
  code: { current: string };
  content?: Block[];
  categories?: CategoryType[];
  tags?: TagType[];
}
