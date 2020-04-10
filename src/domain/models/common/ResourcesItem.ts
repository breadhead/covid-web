import { SanityBase } from '@app/src/domain/models/sanity/SanityBase';

import { Photo } from '../sanity/Photo';

export interface ResourcesItem extends SanityBase {
  status: boolean;
  sortIndex: number;
  name: string;
  url: string;
  logo: Photo;
}
