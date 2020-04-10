import { SanityBase } from '@app/src/domain/models/sanity/SanityBase';
import { Block } from '@app/src/domain/models/sanity/Block';

import { TagType } from './Tag';
import { Photo } from '../sanity/Photo';
import { CategoryType } from './NewsCategoryType';

export interface ArticlesItem extends SanityBase {
  tags?: TagType[];
  status: boolean;
  sortIndex: number;
  name: string;
  code: { current: string };
  content?: Block[];
  categories?: CategoryType[];
  image?: Photo;
  pin?: boolean;
  date?: string;
  webinarDate?: string;
}
