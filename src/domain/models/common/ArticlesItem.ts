import { SanityBase } from '@app/src/domain/models/sanity/SanityBase';
import { Block } from '@app/src/domain/models/sanity/Block';

import { CategoryType } from './NewsCategoryType';
import { TagType } from './Tag';
import { Photo } from '../sanity/Photo';

export interface ArticlesItem extends SanityBase {
  tags?: TagType[];
  status: boolean;
  sortIndex: number;
  name: string;
  code: { current: string };
  content?: Block[];
  categories?: CategoryType[];
  image?: Photo;
}
